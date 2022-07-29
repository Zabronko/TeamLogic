package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Package;
import com.TeamLogic.beans.Truck;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer>{

}
