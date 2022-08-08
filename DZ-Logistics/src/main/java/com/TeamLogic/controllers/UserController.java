package com.TeamLogic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.Services.GenericService;
import com.TeamLogic.beans.User;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private GenericService service;

	@PostMapping("/signup")
	public ResponseEntity<Void> save(@RequestBody User user) {
		service.register(user);
		return ResponseEntity.noContent().build();
	}

}
