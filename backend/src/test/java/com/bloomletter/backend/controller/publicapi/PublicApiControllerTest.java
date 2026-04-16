package com.bloomletter.backend.controller.publicapi;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class PublicApiControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @Test
  void getProductsReturnsOk() throws Exception {
    mockMvc.perform(get("/api/public/products"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.items").isArray())
        .andExpect(jsonPath("$.page").value(1));
  }

  @Test
  void postContactInquiryReturnsCreated() throws Exception {
    String body = """
        {
          "name": "山田 花子",
          "email": "hanako@example.com",
          "phone": "09012345678",
          "inquiryType": "商品について",
          "message": "誕生日向けで優しい雰囲気の花束を探しています。おすすめを相談したいです。"
        }
        """;

    mockMvc.perform(post("/api/public/contact-inquiries")
            .contentType(MediaType.APPLICATION_JSON)
            .content(body))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.message").value("Contact inquiry has been received."));
  }

  @Test
  void postContactInquiryWithInvalidBodyReturnsBadRequest() throws Exception {
    String body = """
        {
          "name": "",
          "email": "bad-email",
          "inquiryType": "不明",
          "message": "short"
        }
        """;

    mockMvc.perform(post("/api/public/contact-inquiries")
            .contentType(MediaType.APPLICATION_JSON)
            .content(body))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.status").value(400))
        .andExpect(jsonPath("$.validationErrors.email").exists());
  }
}

