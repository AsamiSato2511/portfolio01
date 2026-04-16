package com.bloomletter.backend.service;

import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.dto.publicapi.HomeResponse;
import com.bloomletter.backend.dto.publicapi.ProductDetailResponse;
import com.bloomletter.backend.dto.publicapi.ProductSummaryResponse;
import com.bloomletter.backend.dto.publicapi.SceneResponse;
import com.bloomletter.backend.entity.Product;
import com.bloomletter.backend.entity.Scene;
import com.bloomletter.backend.exception.NotFoundException;
import com.bloomletter.backend.mapper.ProductMapper;
import com.bloomletter.backend.mapper.SceneMapper;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class PublicCatalogService {
  private static final int DEFAULT_PAGE_SIZE = 12;

  private final ProductMapper productMapper;
  private final SceneMapper sceneMapper;

  public PublicCatalogService(ProductMapper productMapper, SceneMapper sceneMapper) {
    this.productMapper = productMapper;
    this.sceneMapper = sceneMapper;
  }

  public HomeResponse getHome() {
    return new HomeResponse(
        productMapper.findFeaturedPublishedProducts(4).stream().map(this::toSummary).toList(),
        sceneMapper.findActiveScenes().stream().map(this::toSceneResponse).toList());
  }

  public List<SceneResponse> getScenes() {
    return sceneMapper.findActiveScenes().stream().map(this::toSceneResponse).toList();
  }

  public PageResponse<ProductSummaryResponse> getProducts(Long sceneId, String sort, Integer page, Integer size) {
    int resolvedPage = normalizePage(page);
    int resolvedSize = normalizeSize(size);
    String orderBy = resolveSort(sort);
    long totalItems = productMapper.countPublishedProducts(sceneId);
    List<ProductSummaryResponse> items = productMapper.findPublishedProducts(
        sceneId, offset(resolvedPage, resolvedSize), resolvedSize, orderBy).stream().map(this::toSummary).toList();
    return new PageResponse<>(items, resolvedPage, resolvedSize, totalItems, totalPages(totalItems, resolvedSize));
  }

  public PageResponse<ProductSummaryResponse> getProductsBySceneSlug(String sceneSlug, Integer page, Integer size) {
    Scene scene = sceneMapper.findActiveBySlug(sceneSlug);
    if (scene == null) {
      throw new NotFoundException("Scene not found: " + sceneSlug);
    }
    int resolvedPage = normalizePage(page);
    int resolvedSize = normalizeSize(size);
    String orderBy = resolveSort("recommended");
    long totalItems = productMapper.countPublishedProductsBySceneSlug(sceneSlug);
    List<ProductSummaryResponse> items = productMapper.findPublishedProductsBySceneSlug(
        sceneSlug, offset(resolvedPage, resolvedSize), resolvedSize, orderBy).stream().map(this::toSummary).toList();
    return new PageResponse<>(items, resolvedPage, resolvedSize, totalItems, totalPages(totalItems, resolvedSize));
  }

  public ProductDetailResponse getProductDetail(Long productId) {
    Product product = productMapper.findPublishedProductById(productId);
    if (product == null) {
      throw new NotFoundException("Product not found: " + productId);
    }
    return new ProductDetailResponse(
        product.getId(),
        product.getName(),
        product.getSlug(),
        product.getPrice(),
        product.getDescription(),
        product.getImagePath(),
        product.getImageAlt(),
        product.getStockStatus(),
        product.getSceneName(),
        product.getSceneSlug());
  }

  private ProductSummaryResponse toSummary(Product product) {
    return new ProductSummaryResponse(
        product.getId(),
        product.getName(),
        product.getSlug(),
        product.getPrice(),
        product.getImagePath(),
        product.getImageAlt(),
        product.getSceneName(),
        product.getSceneSlug());
  }

  private SceneResponse toSceneResponse(Scene scene) {
    return new SceneResponse(
        scene.getId(),
        scene.getName(),
        scene.getSlug(),
        scene.getDescription(),
        scene.getHeroCopy(),
        scene.getSortOrder(),
        scene.getProductCount());
  }

  private int normalizePage(Integer page) {
    return page == null || page < 1 ? 1 : page;
  }

  private int normalizeSize(Integer size) {
    if (size == null || size < 1) {
      return DEFAULT_PAGE_SIZE;
    }
    return Math.min(size, 50);
  }

  private int offset(int page, int size) {
    return (page - 1) * size;
  }

  private int totalPages(long totalItems, int size) {
    return (int) Math.ceil((double) totalItems / size);
  }

  private String resolveSort(String sort) {
    if ("priceAsc".equalsIgnoreCase(sort)) {
      return "p.price ASC, p.id ASC";
    }
    if ("priceDesc".equalsIgnoreCase(sort)) {
      return "p.price DESC, p.id ASC";
    }
    if ("nameAsc".equalsIgnoreCase(sort)) {
      return "p.name ASC, p.id ASC";
    }
    return "p.display_order ASC, p.id ASC";
  }
}

