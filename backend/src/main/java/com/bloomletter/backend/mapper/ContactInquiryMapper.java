package com.bloomletter.backend.mapper;

import com.bloomletter.backend.entity.ContactInquiry;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ContactInquiryMapper {
  int insert(ContactInquiry contactInquiry);
  long countAll();
  long countByStatus(@Param("status") String status);
  List<ContactInquiry> findAdminInquiries(
      @Param("query") String query,
      @Param("status") String status,
      @Param("offset") int offset,
      @Param("limit") int limit);
  long countAdminInquiries(
      @Param("query") String query,
      @Param("status") String status);
  ContactInquiry findById(@Param("id") Long id);
  int updateStatus(@Param("id") Long id, @Param("status") String status);
}
