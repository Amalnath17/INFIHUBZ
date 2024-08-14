package com.infi.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infi.food.model.Address;

@Repository
public interface AddressRepo extends JpaRepository<Address,Long>{
    
}
