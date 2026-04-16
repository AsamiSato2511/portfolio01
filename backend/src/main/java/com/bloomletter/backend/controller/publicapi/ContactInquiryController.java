package com.bloomletter.backend.controller.publicapi;

import com.bloomletter.backend.dto.common.ApiMessageResponse;
import com.bloomletter.backend.dto.publicapi.ContactInquiryRequest;
import com.bloomletter.backend.service.ContactInquiryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/contact-inquiries")
public class ContactInquiryController {
  private final ContactInquiryService contactInquiryService;

  public ContactInquiryController(ContactInquiryService contactInquiryService) {
    this.contactInquiryService = contactInquiryService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ApiMessageResponse create(@Valid @RequestBody ContactInquiryRequest request) {
    contactInquiryService.create(request);
    return new ApiMessageResponse("Contact inquiry has been received.");
  }
}

