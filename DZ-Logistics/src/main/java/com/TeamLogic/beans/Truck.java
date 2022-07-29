package com.TeamLogic.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Trucks")
public class Truck {

	@Id
	@Column(name="truckId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int Id;
	
	@ManyToOne()
	@JoinColumn(name="warehouseId")
	@JsonIgnore
	private Warehouse warehouse;
	
	@JoinColumn(name="type")
	private String type;
	
	@JoinColumn(name="capacity")
	private int capacity;
	
	@OneToMany(mappedBy="truck")
	private List<Package> packages;
	
	
	@OneToOne()
	@JoinColumn(name="statusId")
	private Status status;
	

	public Truck() {
		super();
	}

	public Truck(Warehouse warehouse, Status status) {
		super();
		this.warehouse = warehouse;
		this.status = status;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public Warehouse getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(Warehouse warehouse) {
		this.warehouse = warehouse;
	}
	
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public List<Package> getPackages() {
		return packages;
	}

	public void setPackages(List<Package> packages) {
		this.packages = packages;
	}
	

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Truck [Id=" + Id + ", type=" + type + ", capacity=" + capacity + ", status=" + status + "]";
	}
	
}
