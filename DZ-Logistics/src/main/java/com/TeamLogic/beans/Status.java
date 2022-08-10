package com.TeamLogic.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Status")
public class Status {

	@Id
	@Column(name="statusId")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@Column(name="status")
	private String status;

	public Status() {
		super();
	}
	
	public Status(String status) {
		super();
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Status [Id=" + id + ", status=" + status + "]";
	}
	
	
}
