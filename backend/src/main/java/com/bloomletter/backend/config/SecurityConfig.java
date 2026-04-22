package com.bloomletter.backend.config;

import com.bloomletter.backend.dto.common.ErrorResponse;
import com.bloomletter.backend.security.AdminUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDateTime;
import java.util.Map;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
  private final AdminUserDetailsService adminUserDetailsService;
  private final ObjectMapper objectMapper;

  public SecurityConfig(AdminUserDetailsService adminUserDetailsService, ObjectMapper objectMapper) {
    this.adminUserDetailsService = adminUserDetailsService;
    this.objectMapper = objectMapper;
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .cors(Customizer.withDefaults())
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -> auth
            .requestMatchers(
                "/",
                "/*.html",
                "/css/**",
                "/js/**",
                "/images/**",
                "/favicon.ico",
                "/api/public/**",
                "/api/admin/auth/login",
                "/h2-console/**",
                "/v3/api-docs/**",
                "/swagger-ui/**",
                "/swagger-ui.html",
                "/admin/**")
            .permitAll()
            .requestMatchers("/api/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated())
        .httpBasic(Customizer.withDefaults())
        .authenticationProvider(authenticationProvider())
        .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()))
        .exceptionHandling(handling -> handling
            .authenticationEntryPoint((request, response, ex) -> {
              response.setStatus(HttpStatus.UNAUTHORIZED.value());
              response.setContentType(MediaType.APPLICATION_JSON_VALUE);
              ErrorResponse body = new ErrorResponse(
                  LocalDateTime.now(),
                  HttpStatus.UNAUTHORIZED.value(),
                  HttpStatus.UNAUTHORIZED.getReasonPhrase(),
                  "Authentication is required",
                  request.getRequestURI(),
                  Map.of());
              objectMapper.writeValue(response.getWriter(), body);
            })
            .accessDeniedHandler((request, response, ex) -> {
              response.setStatus(HttpStatus.FORBIDDEN.value());
              response.setContentType(MediaType.APPLICATION_JSON_VALUE);
              ErrorResponse body = new ErrorResponse(
                  LocalDateTime.now(),
                  HttpStatus.FORBIDDEN.value(),
                  HttpStatus.FORBIDDEN.getReasonPhrase(),
                  "Access is denied",
                  request.getRequestURI(),
                  Map.of());
              objectMapper.writeValue(response.getWriter(), body);
            }));
    return http.build();
  }

  @Bean
  public AuthenticationProvider authenticationProvider() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(adminUserDetailsService);
    provider.setPasswordEncoder(passwordEncoder());
    return provider;
  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
    return configuration.getAuthenticationManager();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
