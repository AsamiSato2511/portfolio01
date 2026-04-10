Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

function Get-AverageColor {
  param(
    [System.Drawing.Bitmap]$Bitmap,
    [int]$StartX,
    [int]$Width
  )

  $endX = [Math]::Min($Bitmap.Width, $StartX + $Width)
  $r = 0L
  $g = 0L
  $b = 0L
  $count = 0L

  for ($x = $StartX; $x -lt $endX; $x += 2) {
    for ($y = 0; $y -lt $Bitmap.Height; $y += 4) {
      $pixel = $Bitmap.GetPixel($x, $y)
      $r += $pixel.R
      $g += $pixel.G
      $b += $pixel.B
      $count++
    }
  }

  if ($count -eq 0) {
    return [System.Drawing.Color]::FromArgb(248, 243, 238)
  }

  return [System.Drawing.Color]::FromArgb(
    [int]($r / $count),
    [int]($g / $count),
    [int]($b / $count)
  )
}

function Get-SubjectBounds {
  param([System.Drawing.Bitmap]$Bitmap)

  $minX = $Bitmap.Width
  $minY = $Bitmap.Height
  $maxX = -1
  $maxY = -1

  for ($x = 0; $x -lt $Bitmap.Width; $x += 4) {
    for ($y = 0; $y -lt $Bitmap.Height; $y += 4) {
      $pixel = $Bitmap.GetPixel($x, $y)
      if ($pixel.R -lt 248 -or $pixel.G -lt 248 -or $pixel.B -lt 248) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  if ($maxX -lt 0 -or $maxY -lt 0) {
    return [System.Drawing.Rectangle]::new(0, 0, $Bitmap.Width, $Bitmap.Height)
  }

  $padding = 54
  $left = [Math]::Min([Math]::Max(0, $minX + $padding), $Bitmap.Width - 2)
  $top = [Math]::Min([Math]::Max(0, $minY + $padding), $Bitmap.Height - 2)
  $right = [Math]::Max($left + 1, [Math]::Min($Bitmap.Width - 1, $maxX - $padding))
  $bottom = [Math]::Max($top + 1, [Math]::Min($Bitmap.Height - 1, $maxY - $padding))

  return [System.Drawing.Rectangle]::new($left, $top, $right - $left, $bottom - $top)
}

function New-ListingThumb {
  param(
    [string]$SourcePath,
    [string]$OutputPath
  )

  $targetWidth = 1600
  $targetHeight = 1200

  $rawBitmap = [System.Drawing.Bitmap]::new($SourcePath)
  $trimRect = Get-SubjectBounds -Bitmap $rawBitmap
  $sourceBitmap = $rawBitmap.Clone($trimRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $canvas = [System.Drawing.Bitmap]::new($targetWidth, $targetHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($canvas)

  try {
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $edgeSampleWidth = [Math]::Max(24, [Math]::Min(96, [int]($sourceBitmap.Width * 0.08)))
    $leftColor = Get-AverageColor -Bitmap $sourceBitmap -StartX 0 -Width $edgeSampleWidth
    $rightColor = Get-AverageColor -Bitmap $sourceBitmap -StartX ($sourceBitmap.Width - $edgeSampleWidth) -Width $edgeSampleWidth

    $blend = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
      [System.Drawing.Point]::new(0, 0),
      [System.Drawing.Point]::new($targetWidth, 0),
      $leftColor,
      $rightColor
    )
    $graphics.FillRectangle($blend, 0, 0, $targetWidth, $targetHeight)
    $blend.Dispose()

    $foregroundHeight = [int]([Math]::Round($targetHeight * 1.08))
    $scale = $foregroundHeight / [double]$sourceBitmap.Height
    $scaledWidth = [int]([Math]::Round($sourceBitmap.Width * $scale))
    $scaledHeight = [int]([Math]::Round($sourceBitmap.Height * $scale))
    $destX = [int]([Math]::Floor(($targetWidth - $scaledWidth) / 2.0))
    $destY = [int]([Math]::Floor(($targetHeight - $scaledHeight) / 2.0))
    $sideMargin = [Math]::Max(0, $destX)

    if ($sideMargin -gt 0) {
      $leftSourceRect = [System.Drawing.Rectangle]::new(0, 0, $edgeSampleWidth, $sourceBitmap.Height)
      $leftDestRect = [System.Drawing.Rectangle]::new(0, 0, $sideMargin + 8, $targetHeight)
      $graphics.DrawImage($sourceBitmap, $leftDestRect, $leftSourceRect, [System.Drawing.GraphicsUnit]::Pixel)

      $rightSourceRect = [System.Drawing.Rectangle]::new($sourceBitmap.Width - $edgeSampleWidth, 0, $edgeSampleWidth, $sourceBitmap.Height)
      $rightDestRect = [System.Drawing.Rectangle]::new($targetWidth - $sideMargin - 8, 0, $sideMargin + 8, $targetHeight)
      $graphics.DrawImage($sourceBitmap, $rightDestRect, $rightSourceRect, [System.Drawing.GraphicsUnit]::Pixel)
    }

    $softWash = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(28, 255, 251, 247))
    $graphics.FillRectangle($softWash, 0, 0, $targetWidth, $targetHeight)
    $softWash.Dispose()

    $foregroundRect = [System.Drawing.Rectangle]::new($destX, $destY, $scaledWidth, $scaledHeight)
    $graphics.DrawImage($sourceBitmap, $foregroundRect)

    $directory = Split-Path -Parent $OutputPath
    if (-not (Test-Path $directory)) {
      New-Item -ItemType Directory -Path $directory -Force | Out-Null
    }

    $canvas.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "Generated $OutputPath"
  }
  finally {
    $graphics.Dispose()
    $canvas.Dispose()
    $sourceBitmap.Dispose()
    $rawBitmap.Dispose()
  }
}

$targets = @(
  @{ Source = 'images/Top/scene/2-1.png'; Output = 'images/Top/scene/listing/2-1.png' },
  @{ Source = 'images/Top/scene/2-2.png'; Output = 'images/Top/scene/listing/2-2.png' },
  @{ Source = 'images/Top/scene/2-3.png'; Output = 'images/Top/scene/listing/2-3.png' },
  @{ Source = 'images/Top/scene/2-4.png'; Output = 'images/Top/scene/listing/2-4.png' },
  @{ Source = 'images/Top/scene/2-5.png'; Output = 'images/Top/scene/listing/2-5.png' },
  @{ Source = 'images/Top/scene/2-6.png'; Output = 'images/Top/scene/listing/2-6.png' },
  @{ Source = 'images/Top/scene/2-7.png'; Output = 'images/Top/scene/listing/2-7.png' },
  @{ Source = 'images/Top/scene/2-8.png'; Output = 'images/Top/scene/listing/2-8.png' },
  @{ Source = "images/Top/scene/Baby's Breath Air.png"; Output = "images/Top/scene/listing/Baby's Breath Air.png" },
  @{ Source = 'images/Top/scene/Birthday Bloom.png'; Output = 'images/Top/scene/listing/Birthday Bloom.png' },
  @{ Source = 'images/Top/scene/Lily Bell White.png'; Output = 'images/Top/scene/listing/Lily Bell White.png' },
  @{ Source = 'images/Top/scene/Soft Merci.png'; Output = 'images/Top/scene/listing/Soft Merci.png' },
  @{ Source = 'images/Top/scene/Sunflower Ray.png'; Output = 'images/Top/scene/listing/Sunflower Ray.png' },
  @{ Source = 'images/Top/scene/Wisteria Veil.png'; Output = 'images/Top/scene/listing/Wisteria Veil.png' },
  @{ Source = 'images/Top/Featured/1.png'; Output = 'images/Top/Featured/listing/1.png' },
  @{ Source = 'images/Top/Featured/2.png'; Output = 'images/Top/Featured/listing/2.png' },
  @{ Source = 'images/Top/Featured/3.png'; Output = 'images/Top/Featured/listing/3.png' },
  @{ Source = 'images/Top/Featured/4.png'; Output = 'images/Top/Featured/listing/4.png' }
)

foreach ($target in $targets) {
  New-ListingThumb -SourcePath $target.Source -OutputPath $target.Output
}
