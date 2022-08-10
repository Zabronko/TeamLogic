package com.TeamLogic.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.repositories.TruckRepository;
import com.fasterxml.jackson.core.JsonProcessingException;


@RestController
@RequestMapping("/trucks")
@CrossOrigin(origins = "*")
public class TruckController {

	@Autowired
	private TruckRepository repository;
	
	@Autowired
	private GenericService service;
	
	@GetMapping
	public List<Truck> findAll() throws JsonProcessingException {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Truck> findById(@PathVariable int id) throws JsonProcessingException {
		return repository.findById(id);
	}
	
	@PostMapping
	public void saveTruck(@RequestBody Truck truck, @RequestParam int warehouseId) {
		service.saveTruck(truck, warehouseId);
	}
	
	@PutMapping("/{id}")
	public Truck updateTruck(@RequestParam int statusId, @PathVariable int id, @RequestParam int warehouseId) {
		return service.updateTruck(statusId,id,warehouseId);
	}
	
}
