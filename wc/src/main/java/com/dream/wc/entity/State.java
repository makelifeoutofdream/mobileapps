package com.dream.wc.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="state")
public class State implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7005271442449114421L;

	@Column(name = "id")
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@OneToMany(mappedBy="state")
	private Set<City> cityList;

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

	public Set<City> getCityList() {
		return cityList;
	}

	public void setCityList(Set<City> cityList) {
		this.cityList = cityList;
	}
	
	
	

}
