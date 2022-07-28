package com.TeamLogic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.Customer;
import com.TeamLogic.repositories.CustomerRepository;

@RestController
@RequestMapping("/Customers")
@CrossOrigin(origins = "http://localhost:3000/Customers")
public class CustomerController {
	
	@Autowired
	private CustomerRepository repository;
	
	@GetMapping
	@ResponseBody
	public List<Customer> findAll() {
		return repository.findAll();
	}

}
