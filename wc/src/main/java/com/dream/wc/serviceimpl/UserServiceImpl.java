package com.dream.wc.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dream.wc.converter.UserConverter;
import com.dream.wc.dto.UserDto;
import com.dream.wc.entity.User;
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
	public UserDto getUserByNameAndPassword(String name, String password) {
		return UserConverter.UserToUserDto(userRepository.findUserByNameAndPassword(name, password));
	}

}
