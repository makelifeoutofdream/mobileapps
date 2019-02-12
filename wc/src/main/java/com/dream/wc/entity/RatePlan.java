package com.dream.wc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RatePlan")
public class RatePlan implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4870691376349276048L;
	
	@Column(name = "id")
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "type_of_can")
	private String typeOfCan;
	
	@Column(name = "rate")
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
