package com.bloomletter.backend.dto.publicapi;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.util.List;

public record GiftRecommendationReasonsRequest(
    @Valid @NotNull GiftRecommendationSelectionRequest selection,
    @Valid @NotEmpty List<GiftRecommendationProductRequest> products
) {
}
