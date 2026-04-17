package com.bloomletter.backend.dto.admin;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class AdminInquiryStatusUpdateRequest {
  @NotBlank
  @Pattern(
      regexp = "^(UNREAD|IN_PROGRESS|RESOLVED)$",
      message = "status must be UNREAD, IN_PROGRESS, or RESOLVED")
  private String status;

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }
}
