package com.TeamLogic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.repositories.PackageRepository;

@RestController
@RequestMapping("/packages")
@CrossOrigin(origins = "*")
public class PackageController {
	
	@Autowired
	private GenericService service;
	
	@Autowired
	private PackageRepository repository;
	
	@GetMapping
	public List<Package> findAll() {
		return repository.findAll();
	}
	
	@PutMapping("{id}")
	public Truck updateByTruck(@RequestBody() Package pack, @RequestParam(required = false) int truckId, @PathVariable int id) {
		System.out.println(service.updatePackageByTruck(pack, id, truckId));
		return service.updatePackageByTruck(pack, id, truckId);
	}

	@GetMapping("/customer{id}")
	public List<Package> getPackagesByCustomerId(@PathVariable int id) {
		return repository.findByCustomerId(id);
		
	}

}