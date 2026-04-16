package com.bloomletter.backend.mapper;

import com.bloomletter.backend.entity.ContactInquiry;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ContactInquiryMapper {
  int insert(ContactInquiry contactInquiry);
  long countAll();
  long countByStatus(@Param("status") String status);
}

