package com.infi.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infi.food.model.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order,Long>{
    
}
