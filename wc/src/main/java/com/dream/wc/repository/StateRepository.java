package com.dream.wc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dream.wc.entity.State;
import com.dream.wc.entity.User;

@Repository
public interface StateRepository extends JpaRepository<State, Long>{

	
}
