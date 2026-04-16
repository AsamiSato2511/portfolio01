package com.bloomletter.backend.dto.admin;

public record AdminSceneResponse(
    Long id,
    String name,
    String slug,
    Integer sortOrder,
    Boolean active,
    Integer productCount
) {
}

