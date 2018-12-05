package com.dream.wc.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dream.wc.dto.AddressDto;
import com.dream.wc.dto.UserDto;
import com.dream.wc.service.UserService;

@RestController
@RequestMapping("/address")
public class AddressResource {
	
	@Autowired
	private UserService userService;

	@RequestMapping(method=RequestMethod.POST,path="/")
	public ResponseEntity<UserDto> saveUSer(@RequestParam("userId") Long userId, @RequestBody AddressDto dto) {
		return new ResponseEntity<UserDto>(userService.saveUserAddress(userId, dto),HttpStatus.ACCEPTED);
	}
}
