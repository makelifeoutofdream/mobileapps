package com.dream.wc.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dream.wc.dto.UserDto;
import com.dream.wc.service.UserService;

@RestController
@RequestMapping("/user")
public class UserResource {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/")
	public List<UserDto> getUsers(){
		return userService.getUsers();
	}
	
	@RequestMapping(method=RequestMethod.POST,path="/")
	public UserDto saveUSer(@RequestBody UserDto dto) {
		return userService.saveUser(dto);
	}
	
	@RequestMapping(method=RequestMethod.GET,path="/name/password")
	public UserDto getUserByMobileNumberAndPassword(@PathVariable(name="mobileNumber") Long mobileNumber, 
		@PathVariable(name="password")	String password) {
		return userService.getUserByMobileNumberAndPassword(mobileNumber, password);
	}
	
	
	
}
