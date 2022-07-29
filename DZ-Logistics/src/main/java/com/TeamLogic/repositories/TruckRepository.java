package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Truck;

@Repository
public interface TruckRepository extends JpaRepository<Truck, Integer>{

}
