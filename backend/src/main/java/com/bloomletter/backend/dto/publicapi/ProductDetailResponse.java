package com.bloomletter.backend.dto.publicapi;

public record ProductDetailResponse(
    Long id,
    String name,
    String slug,
    Integer price,
    String description,
    String imagePath,
    String imageAlt,
    String stockStatus,
    String sceneName,
    String sceneSlug
) {
}

