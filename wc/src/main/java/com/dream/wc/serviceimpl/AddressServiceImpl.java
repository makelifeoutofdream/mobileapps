package com.dream.wc.serviceimpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dream.wc.converter.AddressConverter;
import com.dream.wc.dto.AddressDto;
import com.dream.wc.repository.AddressRepository;
import com.dream.wc.service.AddressService;

@Service
public class AddressServiceImpl implements AddressService{
	
	@Autowired
	AddressRepository addressRepository;

	@Override
	@Transactional
	public List<AddressDto> getUserAddressList(Long userId) {
		return AddressConverter.addressListToAddressDtoList(addressRepository.findByUserId(userId));
	}

	@Override
	@Transactional
	public void deleteAddress(Long addressId) {
		 addressRepository.deleteById(addressId);;
	}

}
