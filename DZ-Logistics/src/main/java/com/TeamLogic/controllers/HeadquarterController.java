package com.TeamLogic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.Headquarter;
import com.TeamLogic.repositories.HeadquarterRepository;

@RestController
@RequestMapping("/headquarters")
//@CrossOrigin(origins = "*")
public class HeadquarterController {

	@Autowired
	private HeadquarterRepository repository;
	
	@GetMapping
	public List<Headquarter> findAll() {
		return repository.findAll();
	}
	
}
