package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Warehouse;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, Integer>{

}
