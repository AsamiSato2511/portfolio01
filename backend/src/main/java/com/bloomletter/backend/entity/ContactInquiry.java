package com.bloomletter.backend.entity;

import java.time.LocalDateTime;

public class ContactInquiry {
  private Long id;
  private String name;
  private String email;
  private String phone;
  private String inquiryType;
  private String message;
  private String status;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public String getEmail() { return email; }
  public void setEmail(String email) { this.email = email; }
  public String getPhone() { return phone; }
  public void setPhone(String phone) { this.phone = phone; }
  public String getInquiryType() { return inquiryType; }
  public void setInquiryType(String inquiryType) { this.inquiryType = inquiryType; }
  public String getMessage() { return message; }
  public void setMessage(String message) { this.message = message; }
  public String getStatus() { return status; }
  public void setStatus(String status) { this.status = status; }
  public LocalDateTime getCreatedAt() { return createdAt; }
  public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
  public LocalDateTime getUpdatedAt() { return updatedAt; }
  public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}

