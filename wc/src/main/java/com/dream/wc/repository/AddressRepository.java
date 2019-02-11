package com.dream.wc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dream.wc.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{
	public List<Address> findByUserId(Long userId);
}
