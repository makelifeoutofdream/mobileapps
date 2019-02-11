package com.dream.wc.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.dream.wc.converter.AddressConverter;
import com.dream.wc.converter.UserConverter;
import com.dream.wc.dto.AddressDto;
import com.dream.wc.dto.UserDto;
import com.dream.wc.entity.Address;
import com.dream.wc.entity.User;
import com.dream.wc.exception.BusinessException;
import com.dream.wc.exception.ErrorStatus;
import com.dream.wc.repository.UserRepository;
import com.dream.wc.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<UserDto> getUsers() {
		return UserConverter.UserListToUserDtoList(userRepository.findAll()) ;

	}

	@Override
	public UserDto saveUser(UserDto dto) {
		User user=UserConverter.userDtoToUser(dto);
		user.setStatus(true);
		return UserConverter.UserToUserDto(userRepository.save(user)) ;
		
	}

	@Override
	public UserDto getUserById(Long id) {
		return UserConverter.UserToUserDto(userRepository.getOne(id));
	}

	@Override
	public UserDto getUserByMobileNumberAndPassword(Long number, String password) {
		UserDto dto=null;
		List<UserDto> dtoList=UserConverter.UserListToUserDtoList(userRepository.findByMobileNumberAndPassword(number, password));
		if(!CollectionUtils.isEmpty(dtoList)) {
			dto=dtoList.get(0);
		}
		
		return dto;
	}

	@Override
	@Transactional
	public UserDto saveUserAddress(Long userId, AddressDto addressDto) {
		
		Optional<User> user=userRepository.findById(userId);
		if(user.isPresent()==false) {
			throw new BusinessException(ErrorStatus.USER_NOT_FOUND.getCode(),
					ErrorStatus.USER_NOT_FOUND.getMessage());
		}
		Address address=AddressConverter.addressDtoToAddress(addressDto);
		if(CollectionUtils.isEmpty(user.get().getAddress())) {
			user.get().setAddress(new ArrayList<>());
		}
		address.setUser(user.get());
		user.get().getAddress().add(address);
		return UserConverter.UserToUserDto(userRepository.save(user.get()));
	}
	
	
	
	

}
