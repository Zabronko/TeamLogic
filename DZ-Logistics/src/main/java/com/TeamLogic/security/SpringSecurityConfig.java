package com.TeamLogic.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.TeamLogic.filters.CustomerCheckFilter;

@SuppressWarnings("deprecation")
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	DataSource dataSource;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println();
		auth.jdbcAuthentication().dataSource(dataSource).passwordEncoder(passwordEncoder);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.httpBasic();

		http.authorizeRequests().mvcMatchers("/warehouses/**").hasAnyRole("ADMIN");
		http.authorizeRequests().mvcMatchers("/trucks/**").hasAnyRole("ADMIN");
		http.authorizeRequests().mvcMatchers("/customers").hasAnyRole("ADMIN");
		http.authorizeRequests().mvcMatchers("/customers/{id}").hasAnyRole("ADMIN","USER").and().addFilterAfter(new CustomerCheckFilter(), BasicAuthenticationFilter.class);
		http.authorizeRequests().mvcMatchers("/packages/customer**").hasAnyRole("ADMIN","USER");
		http.authorizeRequests().mvcMatchers("/packages/**").hasAnyRole("ADMIN");
		http.authorizeRequests().mvcMatchers("/**").permitAll();
		http.logout();
	}
}
