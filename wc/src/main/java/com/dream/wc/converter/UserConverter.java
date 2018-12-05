package com.dream.wc.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.util.CollectionUtils;

import com.dream.wc.dto.AddressDto;
import com.dream.wc.dto.UserDto;
import com.dream.wc.entity.User;

public class UserConverter {
	
	public static UserDto UserToUserDto(User user) {
		if(user==null) {
			return null;
		}
		UserDto dto=new UserDto();
		dto.setId(user.getId());
		dto.setMobileNumber(user.getMobileNumber());
		dto.setName(user.getName());
		dto.setPassword(user.getPassword());
		dto.setStatus(user.isStatus());
		List<AddressDto> addressList=new ArrayList<>();
		if(CollectionUtils.isEmpty(dto.getAddress())==false)
		user.getAddress().forEach(addr->addressList.add(AddressConverter.addressToAddressDto(addr)));
		dto.setAddress(addressList);
		return dto;
	}
	
	public static User userDtoToUser(UserDto dto) {
		if(dto==null) {
			return null;
		}
		User user=new User();
		user.setMobileNumber(dto.getMobileNumber());
		user.setName(dto.getName());
		user.setPassword(dto.getPassword());
		user.setStatus(dto.isStatus());
		return user;
	}
	
	public static List<UserDto> UserListToUserDtoList(List<User> list) {
		List<UserDto> dtoList=new ArrayList<>();
		if(CollectionUtils.isEmpty(list)) {
			return dtoList;
		}
		list.forEach(usr->{
			UserDto dto=UserToUserDto(usr);
			if(dto!=null)
			dtoList.add(dto);
		});
		return dtoList;
		
	}
	
	
	public static List<User> UserDtoListToUserList(List<UserDto> dtoList) {
		List<User> list=new ArrayList<>();
		if(CollectionUtils.isEmpty(dtoList)) {
			return list;
		}
		dtoList.forEach(usr->{
			User user=userDtoToUser(usr);
			if(user!=null) {
				list.add(user);
			}
		});
		return list;
		
	}

}
