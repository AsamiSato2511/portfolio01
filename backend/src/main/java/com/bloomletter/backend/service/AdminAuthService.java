package com.bloomletter.backend.service;

import com.bloomletter.backend.dto.admin.AdminLoginRequest;
import com.bloomletter.backend.dto.admin.AdminLoginResponse;
import com.bloomletter.backend.entity.AdminUser;
import com.bloomletter.backend.exception.InvalidCredentialsException;
import com.bloomletter.backend.mapper.AdminUserMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AdminAuthService {
  private final AuthenticationManager authenticationManager;
  private final AdminUserMapper adminUserMapper;

  public AdminAuthService(AuthenticationManager authenticationManager, AdminUserMapper adminUserMapper) {
    this.authenticationManager = authenticationManager;
    this.adminUserMapper = adminUserMapper;
  }

  public AdminLoginResponse login(AdminLoginRequest request) {
    try {
      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    } catch (BadCredentialsException ex) {
      throw new InvalidCredentialsException("Invalid email or password");
    }

    AdminUser adminUser = adminUserMapper.findByEmail(request.getEmail());
    adminUserMapper.updateLastLoginAt(adminUser.getId());
    return new AdminLoginResponse(
        adminUser.getId(),
        adminUser.getName(),
        adminUser.getEmail(),
        adminUser.getRole(),
        "Login credentials are valid. Use HTTP Basic auth for admin APIs.");
  }
}

