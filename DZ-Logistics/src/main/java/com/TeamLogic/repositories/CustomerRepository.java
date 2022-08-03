package com.TeamLogic.repositories;

import java.lang.annotation.Repeatable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.TeamLogic.beans.Customer;
import com.TeamLogic.beans.User;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("Select cust, u from Customer cust, User u where u.username =?1 and u.customer = cust")
	public Customer findByUsername(String userName);
	

}
