package com.bloomletter.backend.mapper;

import com.bloomletter.backend.entity.AdminUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AdminUserMapper {
  AdminUser findByEmail(@Param("email") String email);
  int updateLastLoginAt(@Param("id") Long id);
}

