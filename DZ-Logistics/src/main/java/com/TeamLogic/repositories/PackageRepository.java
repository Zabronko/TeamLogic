package com.TeamLogic.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Status;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer>{
	
	public List<Package> findByCustomerId(int id);
	
}
