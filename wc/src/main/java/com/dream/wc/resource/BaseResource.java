package com.dream.wc.resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins="*",allowedHeaders= {"Origin", "X-Requested-With", "Content-Type", "Accept","errorText"},exposedHeaders="errorText",methods= {RequestMethod.GET,RequestMethod.POST
		,RequestMethod.PUT,RequestMethod.DELETE,RequestMethod.OPTIONS})
public class BaseResource {

}
