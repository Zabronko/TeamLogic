package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Route;

@Repository
public interface RouteRepository extends JpaRepository<Route, Integer> {

}
