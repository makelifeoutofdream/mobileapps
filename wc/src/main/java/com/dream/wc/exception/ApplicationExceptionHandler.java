package com.dream.wc.exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApplicationExceptionHandler {

	@ExceptionHandler
	public ResponseEntity handleException(BusinessException exception ) {
		HttpHeaders headers=new HttpHeaders();
		headers.add("errorText", exception.getMessage());
		return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	

	@ExceptionHandler
	public ResponseEntity handleException(DataIntegrityViolationException exception ) {
		HttpHeaders headers=new HttpHeaders();
		headers.add("errorText", "Already Exists");
		return new ResponseEntity<>(headers, HttpStatus.CONFLICT);
	}
}
