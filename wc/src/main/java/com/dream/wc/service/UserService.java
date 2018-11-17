package com.dream.wc.service;

import java.util.List;

import com.dream.wc.dto.UserDto;

public interface UserService {

	
	public List<UserDto> getUsers();
	
	public UserDto saveUser(UserDto user);
	
	public UserDto getUserById(Long id);
	
	public UserDto getUserByNameAndPassword(String name,String password);
}
