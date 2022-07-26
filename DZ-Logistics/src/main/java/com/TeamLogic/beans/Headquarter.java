package com.TeamLogic.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity()
@Table(name = "Headquarters")
public class Headquarter {

	@Id
	@Column(name="headquarterId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@Column(name="city")
	private String city;
	
	@Column(name="state")
	private String state;

	public Headquarter() {
		super();
	}

	public Headquarter(String city, String state) {
		super();
		this.city = city;
		this.state = state;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Override
	public String toString() {
		return "Headquarter [id=" + id + ", city=" + city + ", state=" + state + "]";
	}
	
}
