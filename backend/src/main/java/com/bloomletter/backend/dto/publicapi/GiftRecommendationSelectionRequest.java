package com.bloomletter.backend.dto.publicapi;

import jakarta.validation.constraints.NotBlank;

public record GiftRecommendationSelectionRequest(
    @NotBlank String recipient,
    @NotBlank String scene,
    @NotBlank String mood,
    @NotBlank String budgetRange
) {
}
