package com.bloomletter.backend.service;

import com.bloomletter.backend.dto.publicapi.ContactInquiryRequest;
import com.bloomletter.backend.entity.ContactInquiry;
import com.bloomletter.backend.exception.DuplicateResourceException;
import com.bloomletter.backend.mapper.ContactInquiryMapper;
import com.bloomletter.backend.validation.InquiryTypeValidator;
import org.springframework.stereotype.Service;

@Service
public class ContactInquiryService {
  private final ContactInquiryMapper contactInquiryMapper;
  private final InquiryTypeValidator inquiryTypeValidator;

  public ContactInquiryService(ContactInquiryMapper contactInquiryMapper, InquiryTypeValidator inquiryTypeValidator) {
    this.contactInquiryMapper = contactInquiryMapper;
    this.inquiryTypeValidator = inquiryTypeValidator;
  }

  public void create(ContactInquiryRequest request) {
    if (!inquiryTypeValidator.isValid(request.getInquiryType())) {
      throw new DuplicateResourceException("Unsupported inquiry type: " + request.getInquiryType());
    }

    ContactInquiry inquiry = new ContactInquiry();
    inquiry.setName(request.getName());
    inquiry.setEmail(request.getEmail());
    inquiry.setPhone(request.getPhone());
    inquiry.setInquiryType(request.getInquiryType());
    inquiry.setMessage(request.getMessage());
    inquiry.setStatus("UNREAD");
    contactInquiryMapper.insert(inquiry);
  }
}

