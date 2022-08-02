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
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Warehouse;
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
	
	@PutMapping()
	public void updateAll(@RequestParam int warehouseId, @RequestBody() String Json) {
		System.out.println(Json);
		//return service.updateAllPackages(warehouseId, packages);
	}

	@GetMapping("/customer{id}")
	public List<Package> getPackagesByCustomerId(@PathVariable int id) {
		return repository.findByCustomerId(id);	
	}
	
	@PutMapping("/new")
	public Package save(@RequestBody Package pack, @RequestParam int warehouseId) {
		return service.savePackage(pack, warehouseId);
	}

}