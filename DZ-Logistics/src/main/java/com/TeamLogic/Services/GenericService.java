package com.TeamLogic.Services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.beans.Warehouse;
import com.TeamLogic.repositories.PackageRepository;
import com.TeamLogic.repositories.StatusRepository;
import com.TeamLogic.repositories.TruckRepository;
import com.TeamLogic.repositories.WarehouseRepository;

@Service
public class GenericService {

	@Autowired
	private WarehouseRepository warehouseRepository;
	@Autowired
	private TruckRepository truckRepository;
	@Autowired
	private StatusRepository statusRepository;
	@Autowired
	private PackageRepository packageRepository;


	public Warehouse updateAll(Warehouse warehouse) {
		packageRepository.saveAll(warehouse.getPackages());
		truckRepository.saveAll(warehouse.getTrucks());
		return warehouseRepository.save(warehouse);
	}


	public Package savePackage(Package pack, int warehouseId) {
		pack.setWarehouse(warehouseRepository.findById(warehouseId).get());
		return packageRepository.save(pack);
	}


	public void saveTruck(Truck truck, int warehouseId) {
		truck.setWarehouse(warehouseRepository.findById(warehouseId).get());
		truckRepository.save(truck);
	}

	
}
