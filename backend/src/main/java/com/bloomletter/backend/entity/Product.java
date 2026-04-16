package com.bloomletter.backend.entity;

import java.time.LocalDateTime;

public class Product {
  private Long id;
  private String name;
  private String slug;
  private Integer price;
  private String description;
  private String imagePath;
  private String imageAlt;
  private Long sceneId;
  private String stockStatus;
  private Boolean published;
  private Boolean featured;
  private Integer displayOrder;
  private String sceneName;
  private String sceneSlug;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
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
  public String getSceneName() { return sceneName; }
  public void setSceneName(String sceneName) { this.sceneName = sceneName; }
  public String getSceneSlug() { return sceneSlug; }
  public void setSceneSlug(String sceneSlug) { this.sceneSlug = sceneSlug; }
  public LocalDateTime getCreatedAt() { return createdAt; }
  public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
  public LocalDateTime getUpdatedAt() { return updatedAt; }
  public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}

