package com.bloomletter.backend.mapper;

import com.bloomletter.backend.entity.Product;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProductMapper {
  List<Product> findFeaturedPublishedProducts(@Param("limit") int limit);
  List<Product> findPublishedProducts(
      @Param("sceneId") Long sceneId,
      @Param("offset") int offset,
      @Param("limit") int limit,
      @Param("orderBy") String orderBy);
  long countPublishedProducts(@Param("sceneId") Long sceneId);
  Product findPublishedProductById(@Param("id") Long id);
  List<Product> findPublishedProductsBySceneSlug(
      @Param("sceneSlug") String sceneSlug,
      @Param("offset") int offset,
      @Param("limit") int limit,
      @Param("orderBy") String orderBy);
  long countPublishedProductsBySceneSlug(@Param("sceneSlug") String sceneSlug);
  List<Product> findAdminProducts(
      @Param("query") String query,
      @Param("sceneId") Long sceneId,
      @Param("publishStatus") Boolean publishStatus,
      @Param("offset") int offset,
      @Param("limit") int limit);
  long countAdminProducts(
      @Param("query") String query,
      @Param("sceneId") Long sceneId,
      @Param("publishStatus") Boolean publishStatus);
  Product findAdminProductById(@Param("id") Long id);
  Product findBySlug(@Param("slug") String slug);
  long countAllProducts();
  long countPublishedForAdmin();
  int insertProduct(Product product);
  int updateProduct(Product product);
  int deleteProduct(@Param("id") Long id);
}

