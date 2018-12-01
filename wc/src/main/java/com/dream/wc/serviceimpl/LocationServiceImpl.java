package com.dream.wc.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dream.wc.entity.State;
import com.dream.wc.repository.StateRepository;
import com.dream.wc.service.LocationService;

@Service
public class LocationServiceImpl implements LocationService{

	@Autowired
	private StateRepository stateRepository;
	@Override
	public List<State> getAllStates(String countryCode) {
		return stateRepository.findAll();
	}

}
