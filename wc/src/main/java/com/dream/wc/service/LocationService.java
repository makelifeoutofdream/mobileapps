package com.dream.wc.service;

import java.util.List;

import com.dream.wc.entity.State;

public interface LocationService {

	public List<State> getAllStates(String countryCode);
}
