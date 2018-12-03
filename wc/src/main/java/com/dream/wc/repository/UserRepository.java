package com.dream.wc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dream.wc.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	public List<User> findByMobileNumberAndPassword(Long mobileNumber,String password);
}
