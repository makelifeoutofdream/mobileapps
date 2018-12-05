package com.dream.wc.exception;

public enum ErrorStatus {

	USER_NOT_FOUND(404,"User not found");
	int code;
	String message;
	
	private ErrorStatus(int code,String message) {
		this.code=code;
		this.message=message;
	}

	public int getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}
	
	
	
}
