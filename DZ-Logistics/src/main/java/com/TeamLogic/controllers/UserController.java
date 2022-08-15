package com.TeamLogic.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.beans.User;
import com.TeamLogic.repositories.StatusRepository;
import com.TeamLogic.repositories.TruckRepository;
import com.TeamLogic.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private GenericService service;
	
	@Autowired
	private TruckRepository truckRepository;
	
	@Autowired
	private StatusRepository statusRepository;

	@Autowired
	private UserRepository repo;
	
	@PostMapping("/signup")
	public ResponseEntity<Void> save(@RequestBody User user) {
		service.register(user);
		return ResponseEntity.noContent().build();
	}
	

	@PostMapping("/Driver/take/{id}")
	public ResponseEntity<?> DriverTakeJob(@PathVariable int id, @RequestParam String username, @RequestParam int truckId) {
		User user = repo.findById(username).get();
		Truck truck = truckRepository.findById(truckId).get();
		truck.setStatus(statusRepository.findById(2).get());
		user.setTruck(truck);
		
		for(Package p:truck.getPackages()) {
			p.setStatus(truck.getStatus());
		}
		truckRepository.save(truck);
		repo.save(user);
		user.setPassword(null);
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/Driver/complete/{id}")
	public ResponseEntity<?> DriverCompleteJob(@PathVariable int id, @RequestParam String username,@RequestParam String from, @RequestParam int truckId) {
		User user = repo.findById(username).get();
		Truck truck = truckRepository.findById(truckId).get();
		truck.setStatus(statusRepository.findById(1).get());
		user.setTruck(null);
		
		for(Package p:truck.getPackages()) {
			if(from.equals(p.getCustomer().getCity()+","+p.getCustomer().getState())) {
				p.setStatus(statusRepository.findById(5).get());
				p.setTruck(null);
				p.setWarehouse(null);
			}else {
				p.setWarehouse(service.findWarehouseByLocation(p.getCustomer().getCity(),p.getCustomer().getState()));
				p.setStatus(statusRepository.findById(1).get());
			}
		}
		truckRepository.save(truck);
		repo.save(user);
		user.setPassword(null);
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("/Driver/{username}")
	public ResponseEntity<?> findTruck(@PathVariable String username) {
		User user = repo.findById(username).get();
		return ResponseEntity.ok(user.getTruck());
	}

	@PostMapping("/apply")
	public ResponseEntity<Void> apply(@RequestBody User user) {
		service.applyDriver(user);
		return ResponseEntity.noContent().build();
	}
	

}
