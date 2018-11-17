package com.dream.wc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "order")
public class Order implements Serializable {

	private static final long serialVersionUID = -1327904164763460890L;
	@Column(name = "id")
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "quantity")
	private Long quantity;
	@ManyToOne
	@JoinColumn(name = "agency_id")
	private Agency agency;
	@Column(name = "brand")
	private String brand;
	@Column(name = "can_type")
	private String typeOfCan;
	@Column(name = "amount")
	private Double amount;
	@Column(name = "status")
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

	public Agency getAgency() {
		return agency;
	}

	public void setAgency(Agency agency) {
		this.agency = agency;
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
