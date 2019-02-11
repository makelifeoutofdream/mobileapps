package com.dream.wc.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dream.wc.dto.UserDto;
import com.dream.wc.service.UserService;

@RestController
@RequestMapping("/user")
public class UserResource{

	@Autowired
	private UserService userService;
	
	@RequestMapping("/")
	public List<UserDto> getUsers(){
		return userService.getUsers();
	}
	
	@RequestMapping(method=RequestMethod.POST,path="/")
	public ResponseEntity<UserDto> saveUSer(@RequestBody UserDto dto) {
		return new ResponseEntity<UserDto>(userService.saveUser(dto),HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.GET,path="/getUserByMobileNumberAndPassword")
	public  ResponseEntity<UserDto> getUserByMobileNumberAndPassword(@RequestParam(name="mobileNumber") Long mobileNumber, 
			@RequestParam(name="password")	String password) {
		return  new ResponseEntity<UserDto>(userService.getUserByMobileNumberAndPassword(mobileNumber, password), HttpStatus.ACCEPTED) ;
	}
	
	
	
	
	
	
}
