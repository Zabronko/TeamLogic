package com.TeamLogic.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Routes")
public class Route {

	@Id
	@Column(name="routeId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int Id;
	
	@OneToOne(mappedBy="route")
	private Truck truck;

	public Route() {
		super();
	}
	
	public Route(Truck truck) {
		super();
		this.truck = truck;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public Truck getTruck() {
		return truck;
	}

	public void setTruck(Truck truck) {
		this.truck = truck;
	}

	@Override
	public String toString() {
		return "Route [Id=" + Id + ", truck=" + truck + "]";
	}
	
}
