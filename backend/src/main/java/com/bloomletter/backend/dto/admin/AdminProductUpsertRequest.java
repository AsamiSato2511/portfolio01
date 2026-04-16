package com.bloomletter.backend.dto.admin;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class AdminProductUpsertRequest {
  @NotBlank
  @Size(min = 1, max = 120)
  private String name;

  @NotBlank
  @Pattern(regexp = "^[a-z0-9]+(?:-[a-z0-9]+)*$", message = "slug must contain lowercase letters, numbers, and hyphens only")
  @Size(max = 160)
  private String slug;

  @NotNull
  @Min(500)
  @Max(999999)
  private Integer price;

  @NotBlank
  @Size(min = 20, max = 2000)
  private String description;

  @NotBlank
  @Size(max = 255)
  private String imagePath;

  @Size(max = 150)
  private String imageAlt;

  @NotNull
  private Long sceneId;

  @NotBlank
  @Size(max = 20)
  private String stockStatus;

  @NotNull
  private Boolean published;

  @NotNull
  private Boolean featured;

  @NotNull
  @Min(0)
  @Max(9999)
  private Integer displayOrder;

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public String getSlug() { return slug; }
  public void setSlug(String slug) { this.slug = slug; }
  public Integer getPrice() { return price; }
  public void setPrice(Integer price) { this.price = price; }
  public String getDescription() { return description; }
  public void setDescription(String description) { this.description = description; }
  public String getImagePath() { return imagePath; }
  public void setImagePath(String imagePath) { this.imagePath = imagePath; }
  public String getImageAlt() { return imageAlt; }
  public void setImageAlt(String imageAlt) { this.imageAlt = imageAlt; }
  public Long getSceneId() { return sceneId; }
  public void setSceneId(Long sceneId) { this.sceneId = sceneId; }
  public String getStockStatus() { return stockStatus; }
  public void setStockStatus(String stockStatus) { this.stockStatus = stockStatus; }
  public Boolean getPublished() { return published; }
  public void setPublished(Boolean published) { this.published = published; }
  public Boolean getFeatured() { return featured; }
  public void setFeatured(Boolean featured) { this.featured = featured; }
  public Integer getDisplayOrder() { return displayOrder; }
  public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}

