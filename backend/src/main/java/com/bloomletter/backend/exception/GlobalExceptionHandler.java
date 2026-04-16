package com.bloomletter.backend.exception;

import com.bloomletter.backend.dto.common.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolationException;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ErrorResponse> handleValidation(
      MethodArgumentNotValidException ex,
      HttpServletRequest request) {
    Map<String, String> validationErrors = new LinkedHashMap<>();
    for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
      validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
    }
    return buildResponse(HttpStatus.BAD_REQUEST, "Validation failed", request.getRequestURI(), validationErrors);
  }

  @ExceptionHandler(ConstraintViolationException.class)
  public ResponseEntity<ErrorResponse> handleConstraintViolation(
      ConstraintViolationException ex,
      HttpServletRequest request) {
    return buildResponse(HttpStatus.BAD_REQUEST, ex.getMessage(), request.getRequestURI(), Map.of());
  }

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<ErrorResponse> handleNotFound(NotFoundException ex, HttpServletRequest request) {
    return buildResponse(HttpStatus.NOT_FOUND, ex.getMessage(), request.getRequestURI(), Map.of());
  }

  @ExceptionHandler(InvalidCredentialsException.class)
  public ResponseEntity<ErrorResponse> handleInvalidCredentials(InvalidCredentialsException ex, HttpServletRequest request) {
    return buildResponse(HttpStatus.UNAUTHORIZED, ex.getMessage(), request.getRequestURI(), Map.of());
  }

  @ExceptionHandler(DuplicateResourceException.class)
  public ResponseEntity<ErrorResponse> handleDuplicate(DuplicateResourceException ex, HttpServletRequest request) {
    return buildResponse(HttpStatus.BAD_REQUEST, ex.getMessage(), request.getRequestURI(), Map.of());
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorResponse> handleGeneric(Exception ex, HttpServletRequest request) {
    return buildResponse(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage(), request.getRequestURI(), Map.of());
  }

  private ResponseEntity<ErrorResponse> buildResponse(
      HttpStatus status,
      String message,
      String path,
      Map<String, String> validationErrors) {
    return ResponseEntity.status(status).body(new ErrorResponse(
        LocalDateTime.now(),
        status.value(),
        status.getReasonPhrase(),
        message,
        path,
        validationErrors));
  }
}
