package com.bloomletter.backend.service;

import com.bloomletter.backend.dto.publicapi.GiftRecommendationProductRequest;
import com.bloomletter.backend.dto.publicapi.GiftRecommendationReasonResponse;
import com.bloomletter.backend.dto.publicapi.GiftRecommendationReasonsRequest;
import com.bloomletter.backend.dto.publicapi.GiftRecommendationReasonsResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GiftRecommendationReasonService {
  private static final Logger log = LoggerFactory.getLogger(GiftRecommendationReasonService.class);

  private final ObjectMapper objectMapper;
  private final HttpClient httpClient;
  private final boolean aiEnabled;
  private final String aiBaseUrl;
  private final String aiModel;
  private final String aiApiKey;

  public GiftRecommendationReasonService(
      ObjectMapper objectMapper,
      @Value("${bloomletter.ai.enabled:false}") boolean aiEnabled,
      @Value("${bloomletter.ai.base-url:https://api.openai.com/v1/chat/completions}") String aiBaseUrl,
      @Value("${bloomletter.ai.model:gpt-4o-mini}") String aiModel,
      @Value("${bloomletter.ai.api-key:}") String aiApiKey) {
    this.objectMapper = objectMapper;
    this.aiEnabled = aiEnabled;
    this.aiBaseUrl = aiBaseUrl;
    this.aiModel = aiModel;
    this.aiApiKey = aiApiKey;
    this.httpClient = HttpClient.newBuilder()
        .connectTimeout(Duration.ofSeconds(8))
        .build();
  }

  public GiftRecommendationReasonsResponse generateReasons(GiftRecommendationReasonsRequest request) {
    List<GiftRecommendationReasonResponse> items = tryGenerateWithAi(request)
        .orElseGet(() -> buildFallbackReasons(request));
    return new GiftRecommendationReasonsResponse(items);
  }

  private Optional<List<GiftRecommendationReasonResponse>> tryGenerateWithAi(GiftRecommendationReasonsRequest request) {
    if (!aiEnabled || aiApiKey == null || aiApiKey.isBlank()) {
      return Optional.empty();
    }

    try {
      Map<String, Object> payload = Map.of(
          "model", aiModel,
          "temperature", 0.6,
          "response_format", Map.of("type", "json_object"),
          "messages", List.of(
              Map.of("role", "system", "content",
                  "あなたはフラワーギフトECの推薦理由だけを書くアシスタントです。"
                      + "存在しない商品名を作らず、与えられた productId ごとに 1文の日本語理由だけを返してください。"
                      + "返答形式は JSON で {\"items\":[{\"productId\":\"...\",\"reason\":\"...\"}]} のみです。"),
              Map.of("role", "user", "content", buildAiPrompt(request))));

      HttpRequest httpRequest = HttpRequest.newBuilder(URI.create(aiBaseUrl))
          .timeout(Duration.ofSeconds(15))
          .header("Authorization", "Bearer " + aiApiKey)
          .header("Content-Type", "application/json")
          .POST(HttpRequest.BodyPublishers.ofString(objectMapper.writeValueAsString(payload)))
          .build();

      HttpResponse<String> response = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
      if (response.statusCode() < 200 || response.statusCode() >= 300) {
        log.warn("AI gift recommendation reason API returned status {}", response.statusCode());
        return Optional.empty();
      }

      JsonNode root = objectMapper.readTree(response.body());
      String content = root.path("choices").path(0).path("message").path("content").asText("");
      if (content.isBlank()) {
        return Optional.empty();
      }

      JsonNode itemsNode = objectMapper.readTree(content).path("items");
      if (!itemsNode.isArray()) {
        return Optional.empty();
      }

      Map<String, GiftRecommendationReasonResponse> reasonsById = new LinkedHashMap<>();
      itemsNode.forEach(item -> {
        String productId = item.path("productId").asText("");
        String reason = item.path("reason").asText("");
        if (!productId.isBlank() && !reason.isBlank()) {
          reasonsById.put(productId, new GiftRecommendationReasonResponse(productId, reason.trim()));
        }
      });

      if (reasonsById.isEmpty()) {
        return Optional.empty();
      }

      List<GiftRecommendationReasonResponse> ordered = new ArrayList<>();
      request.products().forEach(product -> ordered.add(
          reasonsById.getOrDefault(product.productId(),
              new GiftRecommendationReasonResponse(product.productId(), buildFallbackReason(request, product)))));
      return Optional.of(ordered);
    } catch (IOException | InterruptedException ex) {
      if (ex instanceof InterruptedException) {
        Thread.currentThread().interrupt();
      }
      log.warn("Falling back to local recommendation reasons", ex);
      return Optional.empty();
    }
  }

  private String buildAiPrompt(GiftRecommendationReasonsRequest request) throws IOException {
    Map<String, Object> prompt = Map.of(
        "selection", request.selection(),
        "products", request.products(),
        "instruction",
        "各商品について、選択条件に合う理由を 45〜70 文字程度の日本語で 1 文ずつ返してください。"
            + "商品名の言い換えや創作はせず、受け取った productId をそのまま使ってください。");
    return objectMapper.writeValueAsString(prompt);
  }

  private List<GiftRecommendationReasonResponse> buildFallbackReasons(GiftRecommendationReasonsRequest request) {
    return request.products().stream()
        .map(product -> new GiftRecommendationReasonResponse(product.productId(), buildFallbackReason(request, product)))
        .toList();
  }

  private String buildFallbackReason(GiftRecommendationReasonsRequest request, GiftRecommendationProductRequest product) {
    String recipient = toRecipientLabel(request.selection().recipient());
    String scene = toSceneLabel(request.selection().scene());
    String mood = toMoodLabel(request.selection().mood());
    String budget = toBudgetLabel(request.selection().budgetRange());
    String color = toColorToneLabel(product.colorTone());

    return "%sへの%sギフトとして、%sな雰囲気と%sの予算感に寄り添いやすく、%sの色合いも魅力です。"
        .formatted(recipient, scene, mood, budget, color);
  }

  private String toRecipientLabel(String recipient) {
    return switch (recipient) {
      case "partner" -> "パートナー";
      case "family" -> "家族";
      case "coworker" -> "職場の方";
      default -> "友人";
    };
  }

  private String toSceneLabel(String scene) {
    return switch (scene) {
      case "thanks" -> "感謝を伝える";
      case "celebration" -> "お祝いの";
      case "seasonal" -> "季節を楽しむ";
      default -> "誕生日の";
    };
  }

  private String toMoodLabel(String mood) {
    return switch (mood) {
      case "elegant" -> "上品";
      case "bright" -> "明るい";
      case "calm" -> "落ち着いた";
      default -> "やさしい";
    };
  }

  private String toBudgetLabel(String budgetRange) {
    return switch (budgetRange) {
      case "high" -> "しっかり贈りたい";
      case "mid" -> "選びやすい";
      default -> "気軽に贈れる";
    };
  }

  private String toColorToneLabel(String colorTone) {
    return switch (colorTone) {
      case "white" -> "ホワイト";
      case "yellow" -> "イエロー";
      case "purple" -> "ラベンダー";
      case "orange" -> "コーラル";
      default -> "ピンク";
    };
  }
}
