package com.dream.wc.dto;

import java.io.Serializable;
import java.math.BigInteger;

public class UserDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1102521701694155881L;
	
	
	private Long id;
	
	private String name;
	
	private BigInteger mobileNumber;
	
	private String password;
	
	private boolean status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigInteger getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(BigInteger mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
}
