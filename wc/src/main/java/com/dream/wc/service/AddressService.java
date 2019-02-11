package com.dream.wc.service;

import java.util.List;

import com.dream.wc.dto.AddressDto;

public interface AddressService {

	public List<AddressDto> getUserAddressList(Long userId);

	public void deleteAddress(Long addressId);
}
