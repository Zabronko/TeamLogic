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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.beans.Warehouse;
import com.TeamLogic.repositories.PackageRepository;
import com.TeamLogic.repositories.TruckRepository;
import com.TeamLogic.repositories.WarehouseRepository;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
@RequestMapping("/warehouses")
@CrossOrigin(origins = "*")
public class WarehouseController {

	@Autowired
	private WarehouseRepository repository;
	
	@Autowired
	private GenericService service;
	
	@GetMapping
	public List<Warehouse> findAll() throws JsonProcessingException {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Warehouse findById(@PathVariable int id) throws JsonProcessingException {
		System.out.println(repository.findById(id).get().getTrucks());
		return repository.findById(id).get();
	}
	
	@PutMapping("/{id}")
	public Warehouse update(@PathVariable int id, @RequestBody Warehouse warehouse) {
		for(Package p: warehouse.getPackages()) {
			p.setWarehouse(warehouse);
		}
		for(Truck t: warehouse.getTrucks()) {
			t.setWarehouse(warehouse);
			for(Package p:t.getPackages()) {
				p.setWarehouse(warehouse);
				p.setTruck(t);
			}
		}
		return service.updateAll(warehouse);
	}
	
//	@GetMapping("/packageId={id}")
//	public Warehouse getByPackageId(@PathVariable int id) {
//		return repository.findByPackages_Package_PackageId(id);
//	}
	
	
}
