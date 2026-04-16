package com.bloomletter.backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.dto.publicapi.HomeResponse;
import com.bloomletter.backend.dto.publicapi.ProductSummaryResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PublicCatalogServiceTest {
  @Autowired
  private PublicCatalogService publicCatalogService;

  @Test
  void getHomeReturnsFeaturedProductsAndScenes() {
    HomeResponse response = publicCatalogService.getHome();

    assertFalse(response.featuredProducts().isEmpty());
    assertEquals(4, response.scenes().size());
  }

  @Test
  void getProductsReturnsPagedItems() {
    PageResponse<ProductSummaryResponse> response = publicCatalogService.getProducts(null, "recommended", 1, 12);

    assertEquals(1, response.page());
    assertFalse(response.items().isEmpty());
  }
}

