package com.infi.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infi.food.model.Chief;

@Repository
public interface ChiefRepo extends JpaRepository<Chief,Long> {

    
} 