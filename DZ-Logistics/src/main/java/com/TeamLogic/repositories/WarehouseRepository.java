package com.TeamLogic.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Warehouse;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, Integer>{

	@Query("From Warehouse war where war.city = ?1 and war.state = ?2")
	public Warehouse findByLocation(String City, String State);

}
