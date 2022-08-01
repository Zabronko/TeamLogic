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


	public Warehouse updateAllPackages(int warehouseId, List<Package> packages) {
		Warehouse warehouse;
		if(warehouseRepository.existsById(warehouseId)) {
			warehouse = warehouseRepository.findById(warehouseId).get();
			for(Package p:packages) {
				p.setWarehouse(warehouseRepository.findById(warehouseId).get());
			}
			packageRepository.saveAll(packages);
			return warehouseRepository.save(warehouse);
		}else {
			throw new IllegalArgumentException("ID Doesnt exist");
		}
		
	}
	
	public Warehouse updateAllTrucks(int warehouseId, List<Truck> trucks) {
		Warehouse warehouse;
		if(warehouseRepository.existsById(warehouseId)) {
			warehouse = warehouseRepository.findById(warehouseId).get();
			for(Truck t:trucks) {
				t.setWarehouse(warehouse);
				for(Package p:t.getPackages()) {
					p.setTruck(t);
					p.setWarehouse(warehouse);
				}
			}
			truckRepository.saveAll(trucks);
			return warehouseRepository.save(warehouse);
		}else {
			throw new IllegalArgumentException("ID Doesnt exist");
		}
		
	}

	
}
