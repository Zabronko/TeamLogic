package com.TeamLogic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
