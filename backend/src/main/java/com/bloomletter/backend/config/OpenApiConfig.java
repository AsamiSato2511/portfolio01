package com.bloomletter.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

  @Bean
  public OpenAPI bloomLetterOpenAPI() {
    return new OpenAPI()
        .info(new Info()
            .title("BloomLetter Backend API")
            .description("BloomLetter public site and admin management APIs.")
            .version("v1")
            .contact(new Contact().name("BloomLetter"))
            .license(new License().name("Internal Portfolio Use")));
  }
}
