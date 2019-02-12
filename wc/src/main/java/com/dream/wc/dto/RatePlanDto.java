package com.dream.wc.dto;

import java.io.Serializable;

public class RatePlanDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -9213011902366562349L;
	private Long id;
	private String typeOfCan;
	private Long rate;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTypeOfCan() {
		return typeOfCan;
	}
	public void setTypeOfCan(String typeOfCan) {
		this.typeOfCan = typeOfCan;
	}
	public Long getRate() {
		return rate;
	}
	public void setRate(Long rate) {
		this.rate = rate;
	}
	
	
}
