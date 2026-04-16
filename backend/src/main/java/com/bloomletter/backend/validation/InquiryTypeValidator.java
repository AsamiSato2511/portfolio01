package com.bloomletter.backend.validation;

import java.util.Set;

import org.springframework.stereotype.Component;

@Component
public class InquiryTypeValidator {
  private static final Set<String> ALLOWED_TYPES = Set.of(
      "商品について",
      "配送について",
      "注文について",
      "メッセージカードについて",
      "その他"
  );

  public boolean isValid(String value) {
    return ALLOWED_TYPES.contains(value);
  }
}

