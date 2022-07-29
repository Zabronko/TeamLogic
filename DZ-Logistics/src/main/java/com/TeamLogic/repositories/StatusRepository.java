package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Status;

@Repository
public interface StatusRepository extends JpaRepository<Status, Integer>{

}
