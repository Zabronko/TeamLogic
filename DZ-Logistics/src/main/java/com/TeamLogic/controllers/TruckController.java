package com.TeamLogic.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.Truck;
import com.TeamLogic.repositories.TruckRepository;
import com.fasterxml.jackson.core.JsonProcessingException;


@RestController
@RequestMapping("/trucks")
@CrossOrigin(origins = "*")
public class TruckController {

	@Autowired
	private TruckRepository repository;
	
	@GetMapping
	public List<Truck> findAll() throws JsonProcessingException {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Truck> findById(@PathVariable int id) throws JsonProcessingException {
		return repository.findById(id);
	}
	
	@PutMapping("/{id}")
	public Truck update(@RequestBody Truck truck, @PathVariable int id) {
		System.out.println(truck);
		return repository.save(truck);
	}
	
}