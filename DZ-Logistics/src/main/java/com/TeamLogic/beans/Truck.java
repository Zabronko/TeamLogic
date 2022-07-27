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

@Entity
@Table(name="DeliveryTrucks")
public class Truck {

	@Id
	@Column(name="truckId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int Id;
	
	@ManyToOne()
	@JoinColumn(name="headquarterId")
	private Headquarter headquarter;
	
	@OneToOne(mappedBy="truck")
	@JsonIgnore
	private Route route;
	
	@OneToOne()
	@JoinColumn(name="statusId")
	private Status status;
	

	public Truck() {
		super();
	}

	public Truck(Headquarter headquarter, Route route, Status status) {
		super();
		this.headquarter = headquarter;
		this.route = route;
		this.status = status;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public Headquarter getHeadquarter() {
		return headquarter;
	}

	public void setHeadquarter(Headquarter headquarter) {
		this.headquarter = headquarter;
	}

	public Route getRoute() {
		return route;
	}

	public void setRoute(Route route) {
		this.route = route;
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
