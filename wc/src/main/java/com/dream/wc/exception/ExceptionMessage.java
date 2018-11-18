package com.dream.wc.exception;

public enum ExceptionMessage {

	UC_USER_MOBILE_NUMBER("Mobile number already exists");
	
	
	String message;
	
	ExceptionMessage(String message){
		this.message=message;
	}
}
