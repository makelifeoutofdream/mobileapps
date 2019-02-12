package com.dream.wc.dto;

import java.io.Serializable;
import java.util.List;

public class AgencyDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3017633548349813343L;

	private Long id;
	private String name;
	private Long mobileNumber;
	private String password;
	private List<OrderDto> orders;
	private List<AgencyAddressDto> agencyaAddress;
	private RatePlanDto ratePlan;
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
	public Long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<OrderDto> getOrders() {
		return orders;
	}
	public void setOrders(List<OrderDto> orders) {
		this.orders = orders;
	}
	public List<AgencyAddressDto> getAgencyaAddress() {
		return agencyaAddress;
	}
	public void setAgencyaAddress(List<AgencyAddressDto> agencyaAddress) {
		this.agencyaAddress = agencyaAddress;
	}
	public RatePlanDto getRatePlan() {
		return ratePlan;
	}
	public void setRatePlan(RatePlanDto ratePlan) {
		this.ratePlan = ratePlan;
	}
	
	
}
