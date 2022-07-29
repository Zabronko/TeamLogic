package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Package;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer>{

}
