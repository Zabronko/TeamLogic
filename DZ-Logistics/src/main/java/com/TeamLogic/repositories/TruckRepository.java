package com.TeamLogic.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Customer;
import com.TeamLogic.beans.Truck;
import com.TeamLogic.beans.Warehouse;

@Repository
public interface TruckRepository extends JpaRepository<Truck, Integer>{

}
