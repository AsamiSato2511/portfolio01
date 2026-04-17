package com.bloomletter.backend.service;

import com.bloomletter.backend.dto.admin.AdminInquiryResponse;
import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.entity.ContactInquiry;
import com.bloomletter.backend.exception.NotFoundException;
import com.bloomletter.backend.mapper.ContactInquiryMapper;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class AdminInquiryService {
  private final ContactInquiryMapper contactInquiryMapper;

  public AdminInquiryService(ContactInquiryMapper contactInquiryMapper) {
    this.contactInquiryMapper = contactInquiryMapper;
  }

  public PageResponse<AdminInquiryResponse> getInquiries(String query, String status, Integer page, Integer size) {
    int resolvedPage = page == null || page < 1 ? 1 : page;
    int resolvedSize = size == null || size < 1 ? 12 : Math.min(size, 50);
    long totalItems = contactInquiryMapper.countAdminInquiries(query, status);
    List<AdminInquiryResponse> items = contactInquiryMapper.findAdminInquiries(
        query, status, (resolvedPage - 1) * resolvedSize, resolvedSize).stream().map(this::toResponse).toList();
    int totalPages = (int) Math.ceil((double) totalItems / resolvedSize);
    return new PageResponse<>(items, resolvedPage, resolvedSize, totalItems, totalPages);
  }

  public AdminInquiryResponse getInquiry(Long id) {
    return toResponse(requireInquiry(id));
  }

  public AdminInquiryResponse updateStatus(Long id, String status) {
    requireInquiry(id);
    contactInquiryMapper.updateStatus(id, status);
    return getInquiry(id);
  }

  private ContactInquiry requireInquiry(Long id) {
    ContactInquiry inquiry = contactInquiryMapper.findById(id);
    if (inquiry == null) {
      throw new NotFoundException("Inquiry not found: " + id);
    }
    return inquiry;
  }

  private AdminInquiryResponse toResponse(ContactInquiry inquiry) {
    return new AdminInquiryResponse(
        inquiry.getId(),
        inquiry.getName(),
        inquiry.getEmail(),
        inquiry.getPhone(),
        inquiry.getInquiryType(),
        inquiry.getMessage(),
        inquiry.getStatus(),
        inquiry.getCreatedAt(),
        inquiry.getUpdatedAt());
  }
}
