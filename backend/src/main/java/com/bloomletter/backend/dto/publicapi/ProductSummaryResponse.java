package com.bloomletter.backend.dto.publicapi;

public record ProductSummaryResponse(
    Long id,
    String name,
    String slug,
    Integer price,
    String imagePath,
    String imageAlt,
    String sceneName,
    String sceneSlug
) {
}

