package com.bloomletter.backend.dto.publicapi;

import java.util.List;

public record HomeResponse(
    List<ProductSummaryResponse> featuredProducts,
    List<SceneResponse> scenes
) {
}

