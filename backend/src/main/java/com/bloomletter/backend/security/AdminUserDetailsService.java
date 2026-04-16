package com.bloomletter.backend.security;

import com.bloomletter.backend.entity.AdminUser;
import com.bloomletter.backend.mapper.AdminUserMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminUserDetailsService implements UserDetailsService {
  private final AdminUserMapper adminUserMapper;

  public AdminUserDetailsService(AdminUserMapper adminUserMapper) {
    this.adminUserMapper = adminUserMapper;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    AdminUser adminUser = adminUserMapper.findByEmail(username);
    if (adminUser == null) {
      throw new UsernameNotFoundException("Admin user not found");
    }
    return new AdminUserDetails(adminUser);
  }
}

