package com.bloomletter.backend.config;

import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
        .addMapping("/api/public/**")
        .allowedOriginPatterns("*")
        .allowedMethods("GET", "POST", "OPTIONS")
        .allowedHeaders("*");
  }

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    Path projectRoot = Paths.get("").toAbsolutePath().getParent();
    if (projectRoot == null) {
      return;
    }

    registry
        .addResourceHandler("/", "/*.html", "/favicon.ico")
        .addResourceLocations(projectRoot.toUri().toString());

    registry
        .addResourceHandler("/css/**")
        .addResourceLocations(projectRoot.resolve("css").toUri().toString());

    registry
        .addResourceHandler("/js/**")
        .addResourceLocations(projectRoot.resolve("js").toUri().toString());

    registry
        .addResourceHandler("/images/**")
        .addResourceLocations(projectRoot.resolve("images").toUri().toString());
  }
}
