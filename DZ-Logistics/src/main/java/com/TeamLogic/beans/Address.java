package com.TeamLogic.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Addresses")
public class Address {

	
	@Id
	@Column(name="addressId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	
	@Column(name="address")
	private int address;


	public Address() {
		super();
	}


	public Address(int id, int address) {
		super();
		this.id = id;
		this.address = address;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getAddress() {
		return address;
	}


	public void setAddress(int address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Address [id=" + id + ", address=" + address + "]";
	}
	
	
}
