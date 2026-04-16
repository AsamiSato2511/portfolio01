package com.bloomletter.backend.security;

import com.bloomletter.backend.entity.AdminUser;
import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class AdminUserDetails implements UserDetails {
  private final AdminUser adminUser;

  public AdminUserDetails(AdminUser adminUser) {
    this.adminUser = adminUser;
  }

  public AdminUser getAdminUser() {
    return adminUser;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("ROLE_" + adminUser.getRole()));
  }

  @Override
  public String getPassword() {
    return adminUser.getPasswordHash();
  }

  @Override
  public String getUsername() {
    return adminUser.getEmail();
  }

  @Override
  public boolean isEnabled() {
    return Boolean.TRUE.equals(adminUser.getEnabled());
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }
}

