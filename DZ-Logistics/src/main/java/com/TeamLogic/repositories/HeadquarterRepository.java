package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Headquarter;

@Repository
public interface HeadquarterRepository extends JpaRepository<Headquarter, Integer>{

}
