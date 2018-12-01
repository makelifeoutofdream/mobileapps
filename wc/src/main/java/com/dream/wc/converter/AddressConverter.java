package com.dream.wc.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.util.CollectionUtils;

import com.dream.wc.dto.AddressDto;
import com.dream.wc.entity.Address;

public class AddressConverter {

	public static Address addressDtoToAddress(AddressDto dto) {
		if(dto==null) {
			return null;
		}
		Address address=new Address();
		address.setAddress1(dto.getAddress1());
		address.setAddress2(dto.getAddress2());
		address.setCity(dto.getCity());
		address.setDistrict(dto.getDistrict());
		address.setPincode(dto.getPincode());
		address.setState(dto.getState());
		address.setStreet(dto.getStreet());
		return address;
	}
	
	
	public static List<Address> addressDtoListToAddressList(List<AddressDto> dtoList){
		List<Address> list=new ArrayList<>();
		if(CollectionUtils.isEmpty(dtoList)) {
			return list;
		}
		dtoList.forEach(dto->{
			Address address=addressDtoToAddress(dto);
			if(address!=null) {
				list.add(address);
			}
		});
		return list;
	}
	
	public static AddressDto addressToAddressDto(Address address) {
		if(address==null) {
			return null;
		}
		
		AddressDto dto=new AddressDto();
		dto.setAddress1(address.getAddress1());
		dto.setAddress2(address.getAddress2());
		dto.setCity(address.getCity());
		dto.setDistrict(address.getDistrict());
		dto.setPincode(address.getPincode());
		dto.setState(address.getState());
		dto.setStreet(address.getStreet());
		return dto;
	}
	
	public static List<AddressDto> addressListToAddressDtoList(List<Address> list){
		List<AddressDto> dtoList=new ArrayList<>();
		
		if(CollectionUtils.isEmpty(list)) {
			return dtoList;
		}
		
		list.forEach(address->{
			AddressDto dto=addressToAddressDto(address);
			if(dto!=null)
				dtoList.add(dto);
		});
		return dtoList;
	}
}
