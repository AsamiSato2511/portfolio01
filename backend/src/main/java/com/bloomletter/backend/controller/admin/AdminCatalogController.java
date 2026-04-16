package com.bloomletter.backend.controller.admin;

import com.bloomletter.backend.dto.admin.AdminDashboardResponse;
import com.bloomletter.backend.dto.admin.AdminProductResponse;
import com.bloomletter.backend.dto.admin.AdminProductUpsertRequest;
import com.bloomletter.backend.dto.admin.AdminSceneResponse;
import com.bloomletter.backend.dto.common.ApiMessageResponse;
import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.service.AdminCatalogService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminCatalogController {
  private final AdminCatalogService adminCatalogService;

  public AdminCatalogController(AdminCatalogService adminCatalogService) {
    this.adminCatalogService = adminCatalogService;
  }

  @GetMapping("/dashboard")
  public AdminDashboardResponse dashboard() {
    return adminCatalogService.getDashboard();
  }

  @GetMapping("/products")
  public PageResponse<AdminProductResponse> products(
      @RequestParam(required = false) String q,
      @RequestParam(required = false) Long sceneId,
      @RequestParam(required = false) Boolean publishStatus,
      @RequestParam(required = false) Integer page,
      @RequestParam(required = false) Integer size) {
    return adminCatalogService.getProducts(q, sceneId, publishStatus, page, size);
  }

  @GetMapping("/products/{productId}")
  public AdminProductResponse product(@PathVariable Long productId) {
    return adminCatalogService.getProduct(productId);
  }

  @PostMapping("/products")
  @ResponseStatus(HttpStatus.CREATED)
  public AdminProductResponse createProduct(@Valid @RequestBody AdminProductUpsertRequest request) {
    return adminCatalogService.createProduct(request);
  }

  @PutMapping("/products/{productId}")
  public AdminProductResponse updateProduct(
      @PathVariable Long productId,
      @Valid @RequestBody AdminProductUpsertRequest request) {
    return adminCatalogService.updateProduct(productId, request);
  }

  @DeleteMapping("/products/{productId}")
  public ApiMessageResponse deleteProduct(@PathVariable Long productId) {
    adminCatalogService.deleteProduct(productId);
    return new ApiMessageResponse("Product deleted successfully.");
  }

  @GetMapping("/scenes")
  public List<AdminSceneResponse> scenes() {
    return adminCatalogService.getScenes();
  }
}

