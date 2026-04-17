package com.bloomletter.backend.controller.admin;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
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
class AdminApiControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @Test
  void adminProductsWithoutAuthReturnsUnauthorized() throws Exception {
    mockMvc.perform(get("/api/admin/products"))
        .andExpect(status().isUnauthorized())
        .andExpect(jsonPath("$.status").value(401));
  }

  @Test
  void adminProductsWithBasicAuthReturnsOk() throws Exception {
    mockMvc.perform(get("/api/admin/products")
            .with(httpBasic("admin@bloom-letter.jp", "password")))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.items").isArray());
  }

  @Test
  void loginApiReturnsOkForValidCredentials() throws Exception {
    String body = """
        {
          "email": "admin@bloom-letter.jp",
          "password": "password"
        }
        """;

    mockMvc.perform(post("/api/admin/auth/login")
            .contentType(MediaType.APPLICATION_JSON)
            .content(body))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.email").value("admin@bloom-letter.jp"));
  }

  @Test
  void createProductWithInvalidPayloadReturnsBadRequest() throws Exception {
    String body = """
        {
          "name": "",
          "slug": "INVALID SLUG",
          "price": 10,
          "description": "short",
          "imagePath": "",
          "sceneId": 999,
          "stockStatus": "",
          "published": true,
          "featured": false,
          "displayOrder": 0
        }
        """;

    mockMvc.perform(post("/api/admin/products")
            .with(httpBasic("admin@bloom-letter.jp", "password"))
            .contentType(MediaType.APPLICATION_JSON)
            .content(body))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.status").value(400));
  }

  @Test
  void adminInquiriesWithBasicAuthReturnsOk() throws Exception {
    mockMvc.perform(get("/api/admin/inquiries")
            .with(httpBasic("admin@bloom-letter.jp", "password")))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.items").isArray());
  }

  @Test
  void updateInquiryStatusReturnsOk() throws Exception {
    String body = """
        {
          "status": "RESOLVED"
        }
        """;

    mockMvc.perform(patch("/api/admin/inquiries/1/status")
            .with(httpBasic("admin@bloom-letter.jp", "password"))
            .contentType(MediaType.APPLICATION_JSON)
            .content(body))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1))
        .andExpect(jsonPath("$.status").value("RESOLVED"));
  }
}
