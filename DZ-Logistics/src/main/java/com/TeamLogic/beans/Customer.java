package com.TeamLogic.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Customers")
public class Customer {
	
	@Id
	@Column(name="customerId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;
	
<<<<<<< HEAD
	private String address;
=======
	// need to map to addresses @OnetoOne
	//private Address address;
>>>>>>> b740c337935109843ae9bb5ba8e78346207c6108

	public Customer() {
		super();
	}

<<<<<<< HEAD
	public Customer(int id, int name, String address) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
=======
	public Customer(int id, String name) {
		super();
		this.id = id;
		this.name = name;
		//this.address = new Address();
>>>>>>> b740c337935109843ae9bb5ba8e78346207c6108
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

<<<<<<< HEAD
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
=======

>>>>>>> b740c337935109843ae9bb5ba8e78346207c6108

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name +"]";
	}
	

}
