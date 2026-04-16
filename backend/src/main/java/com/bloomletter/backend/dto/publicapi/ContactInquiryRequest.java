package com.bloomletter.backend.dto.publicapi;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ContactInquiryRequest {
  @NotBlank
  @Size(max = 80)
  private String name;

  @NotBlank
  @Email
  @Size(max = 255)
  private String email;

  @Pattern(regexp = "^$|^[0-9\\-+() ]{0,30}$", message = "phone must be a valid phone number")
  private String phone;

  @NotBlank
  @Size(max = 50)
  private String inquiryType;

  @NotBlank
  @Size(min = 10, max = 2000)
  private String message;

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
}

