package com.TeamLogic.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.TeamLogic.filters.FilterChainConfig;

@SuppressWarnings("deprecation")
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	DataSource dataSource;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Autowired
	protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println();
		auth.jdbcAuthentication().dataSource(dataSource).passwordEncoder(passwordEncoder);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().addFilterBefore(new FilterChainConfig(), UsernamePasswordAuthenticationFilter.class);
		http.httpBasic(); 

		//http.authorizeRequests().anyRequest().permitAll().and()
		http.authorizeRequests().mvcMatchers("/login").permitAll()
		.mvcMatchers("/logout").permitAll()
		.mvcMatchers("/signup").permitAll()
		.mvcMatchers("/warehouses/**").hasAnyRole("ADMIN")
		.mvcMatchers("/trucks/**").hasAnyRole("ADMIN")
		.mvcMatchers("/customers").hasAnyRole("ADMIN")
		.mvcMatchers("/customers/**").hasAnyRole("ADMIN", "USER")
		.mvcMatchers("/packages/customer**").hasAnyRole("ADMIN","USER")
		.mvcMatchers("/packages/**").hasAnyRole("ADMIN")
		.mvcMatchers("/**").permitAll()
		.and()
		//.formLogin().loginPage("http://localhost:3000/login.jsx").successForwardUrl("/").and()
		.formLogin().disable()
		//.loginPage("/login").and()
        .logout()
        .invalidateHttpSession(true)
        .clearAuthentication(true)
        .deleteCookies("JSESSIONID")
        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
        .logoutSuccessUrl("/")
        .and()
        .rememberMe().tokenValiditySeconds(2592000) // 2592000 = 30 days in Seconds
        .rememberMeParameter("rememberMe");
		
	}
}
