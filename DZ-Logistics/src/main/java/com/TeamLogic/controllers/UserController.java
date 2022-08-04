package com.TeamLogic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamLogic.beans.User;
import com.TeamLogic.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired 
	private UserRepository userRepository;
	


}
