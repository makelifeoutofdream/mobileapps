package com.dream.wc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dream.wc.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	public User findUserByMobileNumberAndPassword(Long mobileNumber,String password);
}
