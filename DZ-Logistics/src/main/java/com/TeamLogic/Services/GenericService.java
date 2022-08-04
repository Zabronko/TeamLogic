package com.TeamLogic.Services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.TeamLogic.beans.Customer;
import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.beans.User;
import com.TeamLogic.beans.Warehouse;
import com.TeamLogic.repositories.CustomerRepository;
import com.TeamLogic.repositories.PackageRepository;
import com.TeamLogic.repositories.StatusRepository;
import com.TeamLogic.repositories.TruckRepository;
import com.TeamLogic.repositories.UserRepository;
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
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private UserRepository userRepository;
	//@Autowired
	private BCryptPasswordEncoder passwordEncoder;


	public Warehouse updateAll(Warehouse warehouse) {
		packageRepository.saveAll(warehouse.getPackages());
		truckRepository.saveAll(warehouse.getTrucks());
		return warehouseRepository.save(warehouse);
	}


	public Package savePackage(Package pack) {
		Random r = new Random();
		int warehouseId = r.nextInt(9-1)+1;
		pack.setWarehouse(warehouseRepository.findById(warehouseId).get());
		return packageRepository.save(pack);
	}


	public void saveTruck(Truck truck, int warehouseId) {
		truck.setWarehouse(warehouseRepository.findById(warehouseId).get());
		truckRepository.save(truck);
	}


	public Truck updateTruck(int statusId, int truckId, int warehouseId) {
		Truck truck = truckRepository.findById(truckId).get();
		truck.setWarehouse(warehouseRepository.findById(warehouseId).get());
		truck.setStatus(statusRepository.findById(statusId).get());
		return truckRepository.save(truck);
	}

	
	public int getCutomerIdByUsername() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String userName = null;
        if (authentication != null) {

                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                userName = userDetails.getUsername();

        }
        if(!userName.equals(null)) {
        	return (int) customerRepository.findByUsername(userName).getId();
        }else {
        	return 0;
        }
    }


	// work in progress DL
	public int warehouseIdbyPackageId(int packId) {
		return 0;
	}
	
	
	// register user
	public void register(User user) {
		String hash = passwordEncoder.encode(user.getPassword());
		user.setPassword(hash); 
	}


	public ResponseEntity<?> getCustomerPackagesIfCorrectCustomer(int id) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentUserName ="";
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
		    currentUserName = authentication.getName();
		}
		Customer customerCheck = customerRepository.findByUsername(currentUserName);
		if(authentication.getAuthorities().toArray()[0].equals(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
			return new ResponseEntity<>(packageRepository.findByCustomerId(id), HttpStatus.OK);
		}
		if(customerCheck.getId() == id) {
			return new ResponseEntity<>(packageRepository.findByCustomerId(id), HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
		}
		
	}


}
