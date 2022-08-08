package com.TeamLogic.beans;

public class LoginInfo {
	private String Authentication;
	private String Authority;
	private Customer customer;
	
	public LoginInfo(String authentication, String authority, Customer customer) {
		super();
		this.Authentication = authentication;
		this.Authority = authority;
		this.customer = customer;
	}
	
	public LoginInfo(String authentication, String authority) {
		super();
		Authentication = authentication;
		Authority = authority;
	}
	public LoginInfo() {
		super();
	}
	public String getAuthentication() {
		return Authentication;
	}
	public void setAuthentication(String authentication) {
		Authentication = authentication;
	}
	public String getAuthority() {
		return Authority;
	}
	public void setAuthority(String authority) {
		Authority = authority;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	

}
