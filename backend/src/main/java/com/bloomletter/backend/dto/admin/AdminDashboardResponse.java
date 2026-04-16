package com.bloomletter.backend.dto.admin;

public record AdminDashboardResponse(
    long productCount,
    long publishedProductCount,
    long contactInquiryCount
) {
}

