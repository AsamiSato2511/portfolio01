package com.bloomletter.backend.dto.admin;

public record AdminProductResponse(
    Long id,
    String name,
    String slug,
    Integer price,
    String description,
    String imagePath,
    String imageAlt,
    Long sceneId,
    String sceneName,
    String stockStatus,
    Boolean published,
    Boolean featured,
    Integer displayOrder
) {
}

