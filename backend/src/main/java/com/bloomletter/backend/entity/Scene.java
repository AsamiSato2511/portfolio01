package com.bloomletter.backend.entity;

import java.time.LocalDateTime;

public class Scene {
  private Long id;
  private String name;
  private String slug;
  private String description;
  private String heroCopy;
  private Integer sortOrder;
  private Boolean active;
  private Integer productCount;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public String getSlug() { return slug; }
  public void setSlug(String slug) { this.slug = slug; }
  public String getDescription() { return description; }
  public void setDescription(String description) { this.description = description; }
  public String getHeroCopy() { return heroCopy; }
  public void setHeroCopy(String heroCopy) { this.heroCopy = heroCopy; }
  public Integer getSortOrder() { return sortOrder; }
  public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }
  public Boolean getActive() { return active; }
  public void setActive(Boolean active) { this.active = active; }
  public Integer getProductCount() { return productCount; }
  public void setProductCount(Integer productCount) { this.productCount = productCount; }
  public LocalDateTime getCreatedAt() { return createdAt; }
  public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
  public LocalDateTime getUpdatedAt() { return updatedAt; }
  public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}

