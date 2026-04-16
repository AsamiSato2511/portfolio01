package com.bloomletter.backend.dto.publicapi;

public record SceneResponse(
    Long id,
    String name,
    String slug,
    String description,
    String heroCopy,
    Integer sortOrder,
    Integer productCount
) {
}

