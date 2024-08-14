package com.infi.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.infi.food.model.Food;

@Repository
public interface AdminfoodRepo extends JpaRepository<Food,Long>{
    
    
}
