package com.dream.wc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dream.wc.entity.Agency;

public interface AgencyRepository extends JpaRepository<Agency, Long>{

	public Agency findByMobileNumberAndPassword(Long mobileNumber,String password);
}
