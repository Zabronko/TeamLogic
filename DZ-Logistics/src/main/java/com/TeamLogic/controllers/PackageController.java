package com.TeamLogic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Package;
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
	public ResponseEntity<?> getPackagesByCustomerId(@PathVariable int id) {
		return service.getCustomerPackagesIfCorrectCustomer(id);
	}
	
	@PostMapping("/new")
	public Package save(@RequestBody Package pack) {
		return service.savePackage(pack);
	}
	

	@GetMapping("/packageId={id}")
	public int getWarehouseByPackageId(@PathVariable int id) {
		Package pack = repository.getReferenceById(id);
		return pack.getWarehouse().getId();
	}

	@PostMapping("/newM")
	public List<Package> save(@RequestBody List<Package> packages) {
		return service.savePackages(packages);

	}
	
	@GetMapping("/status={id}")
	public List<Package> getByStatus(@PathVariable int id){
		return repository.findByStatusId(id);
	}

}