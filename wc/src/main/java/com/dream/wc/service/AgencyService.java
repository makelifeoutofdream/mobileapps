package com.dream.wc.service;

import java.util.List;

import com.dream.wc.dto.AgencyDto;

public interface AgencyService {
	
	public AgencyDto save(AgencyDto dto);
	
	public AgencyDto findAgencyByMobileNumberAndPassword(Long mobileNumber,String password);
	
	public List<AgencyDto> getAllAgencyByCity(String city);

}
