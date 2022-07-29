package com.TeamLogic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.Package;
import com.TeamLogic.repositories.PackageRepository;
import com.TeamLogic.repositories.StatusRepository;

@RestController
@RequestMapping("/packages")
@CrossOrigin(origins = "*")
public class PackageController {
	
	@Autowired
	private PackageRepository repository;
	
	@Autowired
	private StatusRepository statusRepository;
	
	@GetMapping
	public List<Package> findAll() {
		return repository.findAll();
	}
	
	@PutMapping("/{id}")
	public Package save(@RequestBody Package pack, @PathVariable int id) {
		System.out.println(pack);
		if(repository.existsById(id)) {
			pack.setId(id);
			return repository.save(pack);
		}else {
			throw new IllegalArgumentException("ID Doesnt exist");
		}
	}
	
	@GetMapping("/customer{id}")
	public List<Package> getPackagesByCustomerId(@PathVariable int id) {
		return repository.findByCustomerId(id);
		
	}
 
}