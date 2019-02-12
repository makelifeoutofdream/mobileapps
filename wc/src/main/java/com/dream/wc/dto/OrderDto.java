package com.dream.wc.dto;

import java.io.Serializable;

public class OrderDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5657296781148008691L;
	
	private Long id;
	private Long quantity;
	private String brand;
	private String typeOfCan;
	private Double amount;
	private String status;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getTypeOfCan() {
		return typeOfCan;
	}
	public void setTypeOfCan(String typeOfCan) {
		this.typeOfCan = typeOfCan;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	

}
