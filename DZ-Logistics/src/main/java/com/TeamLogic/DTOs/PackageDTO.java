package com.TeamLogic.DTOs;

public class PackageDTO {

	private int id;
	private String description;
	private int warehouseId;
	private int truckId;
	private int customerId;
	private String status;

	public PackageDTO() {
		super();
	}

	public PackageDTO(int id, String description, int warehouseId, int truckId, int customerId, String status) {
		super();
		this.id = id;
		this.description = description;
		this.warehouseId = warehouseId;
		this.truckId = truckId;
		this.customerId = customerId;
		this.status=status;
	}
	
	public PackageDTO(int id, String description, int warehouseId, int customerId, String status) {
		super();
		this.id = id;
		this.description = description;
		this.warehouseId = warehouseId;
		this.customerId = customerId;
		this.status = status;
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

	public int getWarehouseId() {
		return warehouseId;
	}

	public void setWarehouseId(int warehouseId) {
		this.warehouseId = warehouseId;
	}

	public int getTruckId() {
		return truckId;
	}

	public void setTruckId(int truckId) {
		this.truckId = truckId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "PackageDTO [id=" + id + ", description=" + description + ", warehouseId=" + warehouseId + ", truckId="
				+ truckId + ", customerId=" + customerId + ", status=" + status + "]";
	}
	
}
