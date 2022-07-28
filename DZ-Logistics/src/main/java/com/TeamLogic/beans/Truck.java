package com.TeamLogic.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="DeliveryTrucks")
public class Truck {

	@Id
	@Column(name="truckId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int Id;
	
	@ManyToOne()
	@JoinColumn(name="warehouseId")
	private Warehouse warehouse;
	
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

	public Warehouse getHeadquarter() {
		return warehouse;
	}

	public void setHeadquarter(Warehouse warehouse) {
		this.warehouse = warehouse;
	}
	
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Truck [Id=" + Id + "]";
	}
	
}
