package com.bloomletter.backend.service;

import com.bloomletter.backend.dto.admin.AdminDashboardResponse;
import com.bloomletter.backend.dto.admin.AdminProductResponse;
import com.bloomletter.backend.dto.admin.AdminProductUpsertRequest;
import com.bloomletter.backend.dto.admin.AdminSceneResponse;
import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.entity.Product;
import com.bloomletter.backend.entity.Scene;
import com.bloomletter.backend.exception.DuplicateResourceException;
import com.bloomletter.backend.exception.NotFoundException;
import com.bloomletter.backend.mapper.ContactInquiryMapper;
import com.bloomletter.backend.mapper.ProductMapper;
import com.bloomletter.backend.mapper.SceneMapper;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class AdminCatalogService {
  private final ProductMapper productMapper;
  private final SceneMapper sceneMapper;
  private final ContactInquiryMapper contactInquiryMapper;

  public AdminCatalogService(ProductMapper productMapper, SceneMapper sceneMapper, ContactInquiryMapper contactInquiryMapper) {
    this.productMapper = productMapper;
    this.sceneMapper = sceneMapper;
    this.contactInquiryMapper = contactInquiryMapper;
  }

  public AdminDashboardResponse getDashboard() {
    return new AdminDashboardResponse(
        productMapper.countAllProducts(),
        productMapper.countPublishedForAdmin(),
        contactInquiryMapper.countAll());
  }

  public PageResponse<AdminProductResponse> getProducts(String query, Long sceneId, Boolean publishStatus, Integer page, Integer size) {
    int resolvedPage = page == null || page < 1 ? 1 : page;
    int resolvedSize = size == null || size < 1 ? 12 : Math.min(size, 50);
    long totalItems = productMapper.countAdminProducts(query, sceneId, publishStatus);
    List<AdminProductResponse> items = productMapper.findAdminProducts(
        query, sceneId, publishStatus, (resolvedPage - 1) * resolvedSize, resolvedSize).stream().map(this::toAdminResponse).toList();
    int totalPages = (int) Math.ceil((double) totalItems / resolvedSize);
    return new PageResponse<>(items, resolvedPage, resolvedSize, totalItems, totalPages);
  }

  public AdminProductResponse getProduct(Long id) {
    Product product = requireProduct(id);
    return toAdminResponse(product);
  }

  public AdminProductResponse createProduct(AdminProductUpsertRequest request) {
    validateScene(request.getSceneId());
    Product existing = productMapper.findBySlug(request.getSlug());
    if (existing != null) {
      throw new DuplicateResourceException("Product slug already exists: " + request.getSlug());
    }
    Product product = toEntity(request);
    productMapper.insertProduct(product);
    return getProduct(product.getId());
  }

  public AdminProductResponse updateProduct(Long id, AdminProductUpsertRequest request) {
    Product current = requireProduct(id);
    validateScene(request.getSceneId());
    Product existing = productMapper.findBySlug(request.getSlug());
    if (existing != null && !existing.getId().equals(id)) {
      throw new DuplicateResourceException("Product slug already exists: " + request.getSlug());
    }
    Product product = toEntity(request);
    product.setId(current.getId());
    productMapper.updateProduct(product);
    return getProduct(id);
  }

  public void deleteProduct(Long id) {
    requireProduct(id);
    productMapper.deleteProduct(id);
  }

  public List<AdminSceneResponse> getScenes() {
    return sceneMapper.findAllScenesWithProductCounts().stream().map(this::toAdminSceneResponse).toList();
  }

  private Product requireProduct(Long id) {
    Product product = productMapper.findAdminProductById(id);
    if (product == null) {
      throw new NotFoundException("Product not found: " + id);
    }
    return product;
  }

  private void validateScene(Long sceneId) {
    if (!sceneMapper.existsById(sceneId)) {
      throw new NotFoundException("Scene not found: " + sceneId);
    }
  }

  private Product toEntity(AdminProductUpsertRequest request) {
    Product product = new Product();
    product.setName(request.getName());
    product.setSlug(request.getSlug());
    product.setPrice(request.getPrice());
    product.setDescription(request.getDescription());
    product.setImagePath(request.getImagePath());
    product.setImageAlt(request.getImageAlt());
    product.setSceneId(request.getSceneId());
    product.setStockStatus(request.getStockStatus());
    product.setPublished(request.getPublished());
    product.setFeatured(request.getFeatured());
    product.setDisplayOrder(request.getDisplayOrder());
    return product;
  }

  private AdminProductResponse toAdminResponse(Product product) {
    return new AdminProductResponse(
        product.getId(),
        product.getName(),
        product.getSlug(),
        product.getPrice(),
        product.getDescription(),
        product.getImagePath(),
        product.getImageAlt(),
        product.getSceneId(),
        product.getSceneName(),
        product.getStockStatus(),
        product.getPublished(),
        product.getFeatured(),
        product.getDisplayOrder());
  }

  private AdminSceneResponse toAdminSceneResponse(Scene scene) {
    return new AdminSceneResponse(
        scene.getId(),
        scene.getName(),
        scene.getSlug(),
        scene.getSortOrder(),
        scene.getActive(),
        scene.getProductCount());
  }
}
