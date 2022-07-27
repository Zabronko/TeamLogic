package com.TeamLogic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.repositories.RouteRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/routes")
@CrossOrigin(origins = "*")
public class RouteController {

	@Autowired
	private RouteRepository repository;
	
	@GetMapping
	public String findAll() throws JsonProcessingException {
		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(repository.findAll());
		return json;
	}
}
