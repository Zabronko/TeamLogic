package com.TeamLogic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Customer;
import com.TeamLogic.beans.Package;
import com.TeamLogic.repositories.CustomerRepository;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*")
public class CustomerController {

	@Autowired
	private CustomerRepository repository;

	@Autowired
	private GenericService service;

	@GetMapping
	public List<Customer> findAll() {
		return repository.findAll();
	}

	@PostMapping
	public Customer save(@RequestBody Customer customer) {
		return repository.save(customer);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable int id) {
		return service.findCustomerIdAuthorized(id);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	@PutMapping("/{id}")
	public Customer update(@RequestBody Customer customer) {
		return repository.save(customer);
	}

	@GetMapping("/packages")
	public List<Package> getPackagesAndInfo(@RequestParam String username) {
		return service.getCustomerPackagesWithUsername(username);
	}



}
