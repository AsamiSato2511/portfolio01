package com.bloomletter.backend.dto.publicapi;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record GiftRecommendationProductRequest(
    @NotBlank String productId,
    @NotBlank String name,
    @NotBlank String scene,
    @NotBlank String mood,
    @NotBlank String colorTone,
    @NotBlank String budgetRange,
    @NotBlank String description,
    @NotNull Integer price
) {
}
