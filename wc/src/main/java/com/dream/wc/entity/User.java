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
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="User",
uniqueConstraints= { 
		@UniqueConstraint(name="UC_USER_MOBILE_NUMBER",columnNames= {"mobile_number"})

}
		)
public class User implements Serializable {

	private static final long serialVersionUID = -4927762321410128614L;
	@Column(name = "id")
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "name", nullable = true)
	private String name;
	@Column(name = "mobile_number", nullable = true, length = 10)
	private Long mobileNumber;
	@Column(name = "password", nullable = true)
	private String password;
	@Column(name = "status", columnDefinition = "tinyint(1) default 1")
	private boolean status;
	@OneToMany(mappedBy = "user",fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Address> address;

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
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

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

}
