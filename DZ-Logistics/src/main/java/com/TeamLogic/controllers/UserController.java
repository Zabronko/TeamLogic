package com.TeamLogic.controllers;

import java.util.List;

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
	

	@PostMapping("/Driver/truck/{id}")
	public ResponseEntity<?> DriverSaveTruck(@PathVariable int id, @RequestParam String username) {
		User user = repo.findById(username).get();
		Truck truck = truckRepository.findById(id).get();
		truck.setStatus(statusRepository.findById(2).get());
		user.setTruck(truck);
		repo.save(user);
		user.setPassword(null);
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("/Driver/{username}")
	public Truck findTruck(@PathVariable String username) {
		User user = repo.findById(username).get();
		return user.getTruck();
	}

	@PostMapping("/apply")
	public ResponseEntity<Void> apply(@RequestBody User user) {
		service.applyDriver(user);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/use")
	public List<User> getAll(){
		return repo.findAll();
	}

}
