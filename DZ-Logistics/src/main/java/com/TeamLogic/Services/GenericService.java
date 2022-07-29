package com.TeamLogic.Services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

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
	
	
	@Transactional()
	public Truck updatePackageByTruck(Package pack,int packageId, int truckId) {
		Truck truck = null;
		if (truckId > 0) {
			truck = truckRepository.findById(truckId).get();
		}
		if(packageRepository.existsById(pack.getId())) {
			Package recievedPack = packageRepository.findById(packageId).get();
			recievedPack.setDescription(pack.getDescription());
			if(truck != null) {
				truck.getPackages().add(pack);
				recievedPack.setStatus(statusRepository.findById(3).get());
				recievedPack.setTruck(truck);
			}else {
				recievedPack.setTruck(null);
				recievedPack.setStatus(statusRepository.findById(1).get());
			}
			packageRepository.save(recievedPack);
			return recievedPack.getTruck();
		}else {
			throw new IllegalArgumentException("ID Doesnt exist");
		}
	}
	
}
