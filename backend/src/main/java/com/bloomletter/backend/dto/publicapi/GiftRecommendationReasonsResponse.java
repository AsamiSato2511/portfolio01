package com.bloomletter.backend.dto.publicapi;

import java.util.List;

public record GiftRecommendationReasonsResponse(
    List<GiftRecommendationReasonResponse> items
) {
}
