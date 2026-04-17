package com.bloomletter.backend.controller.admin;

import com.bloomletter.backend.dto.admin.AdminInquiryResponse;
import com.bloomletter.backend.dto.admin.AdminInquiryStatusUpdateRequest;
import com.bloomletter.backend.dto.common.PageResponse;
import com.bloomletter.backend.service.AdminInquiryService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/inquiries")
public class AdminInquiryController {
  private final AdminInquiryService adminInquiryService;

  public AdminInquiryController(AdminInquiryService adminInquiryService) {
    this.adminInquiryService = adminInquiryService;
  }

  @GetMapping
  public PageResponse<AdminInquiryResponse> inquiries(
      @RequestParam(required = false) String q,
      @RequestParam(required = false) String status,
      @RequestParam(required = false) Integer page,
      @RequestParam(required = false) Integer size) {
    return adminInquiryService.getInquiries(q, status, page, size);
  }

  @GetMapping("/{inquiryId}")
  public AdminInquiryResponse inquiry(@PathVariable Long inquiryId) {
    return adminInquiryService.getInquiry(inquiryId);
  }

  @PatchMapping("/{inquiryId}/status")
  public AdminInquiryResponse updateStatus(
      @PathVariable Long inquiryId,
      @Valid @RequestBody AdminInquiryStatusUpdateRequest request) {
    return adminInquiryService.updateStatus(inquiryId, request.getStatus());
  }
}
