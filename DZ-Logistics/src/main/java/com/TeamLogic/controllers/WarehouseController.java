package com.TeamLogic.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.Warehouse;
import com.TeamLogic.repositories.WarehouseRepository;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
@RequestMapping("/warehouses")
@CrossOrigin(origins = "*")
public class WarehouseController {

	@Autowired
	private WarehouseRepository repository;
	
	@GetMapping
	public List<Warehouse> findAll() throws JsonProcessingException {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Warehouse> findById(int id) throws JsonProcessingException {
		return repository.findById(id);
	}
	
}
