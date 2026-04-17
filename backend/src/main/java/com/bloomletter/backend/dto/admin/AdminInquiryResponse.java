package com.bloomletter.backend.dto.admin;

import java.time.LocalDateTime;

public record AdminInquiryResponse(
    Long id,
    String name,
    String email,
    String phone,
    String inquiryType,
    String message,
    String status,
    LocalDateTime createdAt,
    LocalDateTime updatedAt
) {
}
