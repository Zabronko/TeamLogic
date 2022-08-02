package com.TeamLogic.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.TeamLogic.beans.Customer;
import com.TeamLogic.beans.Warehouse;
import com.TeamLogic.repositories.CustomerRepository;
import com.fasterxml.jackson.core.JsonProcessingException;


@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*")
public class CustomerController {
	
	@Autowired
	private CustomerRepository repository;
	
	@GetMapping
	public List<Customer> findAll() {
		return repository.findAll();
	}
	
	@PostMapping
	public Customer save(@RequestBody Customer customer) {
		return repository.save(customer);
	}
	
	@GetMapping("/{id}")
	public Optional<Customer> findById(@PathVariable int id) {
		return repository.findById(id);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public Customer update(@RequestBody Customer customer) {
		return repository.save(customer);
	}

}
