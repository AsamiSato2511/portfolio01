package com.bloomletter.backend.controller.publicapi;

import com.bloomletter.backend.dto.publicapi.GiftRecommendationReasonsRequest;
import com.bloomletter.backend.dto.publicapi.GiftRecommendationReasonsResponse;
import com.bloomletter.backend.service.GiftRecommendationReasonService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai/gift-recommendations")
public class AiGiftRecommendationController {
  private final GiftRecommendationReasonService giftRecommendationReasonService;

  public AiGiftRecommendationController(GiftRecommendationReasonService giftRecommendationReasonService) {
    this.giftRecommendationReasonService = giftRecommendationReasonService;
  }

  @PostMapping("/reasons")
  public GiftRecommendationReasonsResponse reasons(@Valid @RequestBody GiftRecommendationReasonsRequest request) {
    return giftRecommendationReasonService.generateReasons(request);
  }
}
