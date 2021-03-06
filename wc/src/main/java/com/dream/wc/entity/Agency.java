package com.dream.wc.entity;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "agency")
public class Agency implements Serializable {

	private static final long serialVersionUID = -4299105636010971796L;
	@Column(name = "id")
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "mobile_number")
	private Long mobileNumber;
	@Column(name = "password")
	private String password;
	
	
	@OneToMany(mappedBy = "agency", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Order> orders;

	@OneToMany(mappedBy = "agency", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<AgencyAddress> agencyaAddress;

	@OneToOne
	private RatePlan ratePlan;

	public List<AgencyAddress> getAgencyaAddress() {
		return agencyaAddress;
	}

	public void setAgencyaAddress(List<AgencyAddress> agencyaAddress) {
		this.agencyaAddress = agencyaAddress;
	}

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

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
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

	public RatePlan getRatePlan() {
		return ratePlan;
	}

	public void setRatePlan(RatePlan ratePlan) {
		this.ratePlan = ratePlan;
	}

	
}
