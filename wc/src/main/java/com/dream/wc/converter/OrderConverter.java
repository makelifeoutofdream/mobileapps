package com.dream.wc.converter;

import com.dream.wc.dto.OrderDto;
import com.dream.wc.entity.Order;

public class OrderConverter {

	public static OrderDto orderToDto(Order order) {
		OrderDto dto=new OrderDto();
		if(order==null) {
			return dto;
		}
		dto.setAmount(order.getAmount());
		dto.setBrand(order.getBrand());
		dto.setId(order.getId());
		dto.setQuantity(order.getQuantity());
		dto.setStatus(order.getStatus());
		dto.setTypeOfCan(order.getStatus());
		return dto;
	}
	
	public static Order dtoToOrder(OrderDto dto) {
		Order order=new Order();
		if(dto==null) {
			return order;
		}
		order.setAmount(dto.getAmount());
		order.setBrand(dto.getBrand());
		order.setId(dto.getId());
		order.setQuantity(dto.getQuantity());
		order.setStatus(dto.getStatus());
		order.setTypeOfCan(dto.getStatus());
		return order;
	}
}
