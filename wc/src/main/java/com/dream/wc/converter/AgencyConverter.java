package com.dream.wc.converter;

import com.dream.wc.dto.AgencyDto;
import com.dream.wc.entity.Agency;

public class AgencyConverter {

	public static AgencyDto AgencyToDto(Agency agency) {
		AgencyDto dto=new AgencyDto();
		if(agency==null) {
			return dto;
		}
		dto.setId(agency.getId());
		dto.setMobileNumber(agency.getMobileNumber());
		dto.setName(agency.getName());
		dto.setPassword(agency.getPassword());
		return dto;
	}
}
