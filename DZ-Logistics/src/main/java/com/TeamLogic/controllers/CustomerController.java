package com.TeamLogic.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.Customer;
import com.TeamLogic.repositories.CustomerRepository;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

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

}
