package com.bloomletter.backend.dto.admin;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class AdminLoginRequest {
  @NotBlank
  @Email
  @Size(max = 255)
  private String email;

  @NotBlank
  @Size(min = 8, max = 100)
  private String password;

  public String getEmail() { return email; }
  public void setEmail(String email) { this.email = email; }
  public String getPassword() { return password; }
  public void setPassword(String password) { this.password = password; }
}

