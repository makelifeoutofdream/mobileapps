package com.dream.wc.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dream.wc.entity.State;
import com.dream.wc.service.LocationService;

@RestController
@RequestMapping("/location")
public class LocationResource {
	@Autowired
	private LocationService locationService;
	
	@RequestMapping("/state")
	public ResponseEntity<List<State>> getAllStates(@RequestParam(name="country") String country){
		return new ResponseEntity<List<State>>(locationService.getAllStates(country), HttpStatus.ACCEPTED);
	}
	

}
