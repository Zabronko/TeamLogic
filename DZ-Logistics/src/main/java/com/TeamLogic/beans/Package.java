package com.TeamLogic.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity()
@Table(name="Packages")
public class Package {

	@Id
	@Column(name="packageId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@Column(name="description")
	private String description;
	
	@OneToOne()
	@JoinColumn(name="warehouseId")
	@JsonIgnore
	private Warehouse warehouse;
	
	@OneToOne()
	@JoinColumn(name="truckId")
	@JsonIgnore
	private Truck truck;
	
	@ManyToOne()
	@JoinColumn(name="customerId")
	@JsonIgnore
	private Customer customer;
	
	@OneToOne()
	@JoinColumn(name="statusId")
	private Status status;

	public Package() {
		super();
	}

	public Package(String description, Truck truck, Customer customer) {
		super();
		this.description = description;
		this.truck = truck;
		this.customer = customer;
	}
	
	public Package(String description, Warehouse warehouse, Customer customer) {
		super();
		this.description = description;
		this.warehouse = warehouse;
		this.customer = customer;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Warehouse getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(Warehouse warehouse) {
		this.warehouse = warehouse;
	}

	public Truck getTruck() {
		return truck;
	}

	public void setTruck(Truck truck) {
		this.truck = truck;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Package [id=" + id + ", description=" + description + ", customer=" + customer + ", status=" + status + "]";
	}
	
	
}
