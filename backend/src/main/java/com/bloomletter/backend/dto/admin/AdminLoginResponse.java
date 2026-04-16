package com.bloomletter.backend.dto.admin;

public record AdminLoginResponse(
    Long id,
    String name,
    String email,
    String role,
    String message
) {
}

