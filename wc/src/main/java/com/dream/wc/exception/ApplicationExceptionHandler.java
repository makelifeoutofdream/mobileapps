package com.dream.wc.exception;

import java.util.Arrays;
import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApplicationExceptionHandler {

	private List<ExceptionMessage> exceptionCodeList;
	
	public ApplicationExceptionHandler() {
		exceptionCodeList=Arrays.asList(ExceptionMessage.values());
	}
	
	@ExceptionHandler
	public ResponseEntity handleException(BusinessException exception ) {
		HttpHeaders headers=new HttpHeaders();
		headers.add("errorText", exception.getMessage());
		return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
 
	@ExceptionHandler
	public ResponseEntity handleException(DataIntegrityViolationException exception ) {
		String errorText="Already Exists";
		for(ExceptionMessage exp:exceptionCodeList){
			
			if(exception.getMostSpecificCause().getMessage().contains(exp.name())) {
				errorText=ExceptionMessage.valueOf(exp.name()).message;
			}
		}
		HttpHeaders headers=new HttpHeaders();
		headers.add("errorText", errorText);
		return new ResponseEntity<>(headers, HttpStatus.CONFLICT);
	}
	

}
