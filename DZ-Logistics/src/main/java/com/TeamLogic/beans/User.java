package com.TeamLogic.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {

	@Id
	@Column(name="username")
	private String username;
	
	private boolean enabled;
	
	//null if Admin or Driver
	@OneToOne()
	@JoinColumn(name="customerId")
	private Customer customer;
	
	@Column(name="password")
	private String password;
	
	// only assigned if the user has the driver role
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="truckId")
	private Truck truck;
	
	public User() {
		super();
	}
	
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}


	public User(String username, String password, Customer customer) {
		super();
		this.username = username;
		this.password = password;
		this.customer = customer;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	

	public Truck getTruck() {
		return truck;
	}

	public void setTruck(Truck truck) {
		this.truck = truck;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", customer=" + customer + ", password=" + password + "]";
	}
	
	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	
}
