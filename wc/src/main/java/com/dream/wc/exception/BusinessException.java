package com.dream.wc.exception;

public class BusinessException extends RuntimeException {

	int code;
	
	String message;
	
	public BusinessException(int code,String message) {
		super(message);
		this.code=code;
		this.message=message;
	}
	
	public BusinessException(Throwable e, int code,String message) {
		super(message, e);
		this.code=code;
		this.message=message;
	}
}
