package com.bloomletter.backend.controller.publicapi;

import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.dto.publicapi.HomeResponse;
import com.bloomletter.backend.dto.publicapi.ProductDetailResponse;
import com.bloomletter.backend.dto.publicapi.ProductSummaryResponse;
import com.bloomletter.backend.dto.publicapi.SceneResponse;
import com.bloomletter.backend.service.PublicCatalogService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class PublicCatalogController {
  private final PublicCatalogService publicCatalogService;

  public PublicCatalogController(PublicCatalogService publicCatalogService) {
    this.publicCatalogService = publicCatalogService;
  }

  @GetMapping("/home")
  public HomeResponse home() {
    return publicCatalogService.getHome();
  }

  @GetMapping("/scenes")
  public List<SceneResponse> scenes() {
    return publicCatalogService.getScenes();
  }

  @GetMapping("/products")
  public PageResponse<ProductSummaryResponse> products(
      @RequestParam(required = false) Long sceneId,
      @RequestParam(required = false) String sort,
      @RequestParam(required = false) Integer page,
      @RequestParam(required = false) Integer size) {
    return publicCatalogService.getProducts(sceneId, sort, page, size);
  }

  @GetMapping("/products/{productId}")
  public ProductDetailResponse productDetail(@PathVariable Long productId) {
    return publicCatalogService.getProductDetail(productId);
  }

  @GetMapping("/scenes/{sceneSlug}/products")
  public PageResponse<ProductSummaryResponse> productsByScene(
      @PathVariable String sceneSlug,
      @RequestParam(required = false) Integer page,
      @RequestParam(required = false) Integer size) {
    return publicCatalogService.getProductsBySceneSlug(sceneSlug, page, size);
  }
}

