package com.TeamLogic.controllers;

import java.time.Instant;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import com.TeamLogic.beans.LoginInfo;
import com.TeamLogic.beans.User;
import com.TeamLogic.repositories.UserRepository;

import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class LoginController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) throws Exception {
		Authentication auth;
		System.out.println(user);
		try {
			auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(auth);
			user.setPassword(null);
			
			String jws = Jwts.builder()
					  .setIssuer("TeamLogic")
					  .setSubject("Authorization")
					  .claim("name", user.getUsername())
					  .claim("scope", auth.getAuthorities())
					  // Fri Jun 24 2016 15:33:42 GMT-0400 (EDT)
					  .setIssuedAt(Date.from(Instant.ofEpochSecond(1466796822L)))
					  // Sat Jun 24 2116 15:33:42 GMT-0400 (EDT)
					  .setExpiration(Date.from(Instant.ofEpochSecond(4622470422L)))
					  .compact();
			System.out.println(RequestContextHolder.getRequestAttributes().getSessionId());
			return ResponseEntity.ok(new LoginInfo(RequestContextHolder.getRequestAttributes().getSessionId(), auth.getAuthorities().toArray()[0].toString()));//.header(org.springframework.http.HttpHeaders.AUTHORIZATION).body(jws);
		}catch (BadCredentialsException e) {
			throw new Exception("Invalid Credentials");
		}
	}
	
}

