package com.infi.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.infi.food.model.Users;

@Repository
public interface UserRepo extends JpaRepository<Users, Long> 
{

    @Query("select u from Users u where u.userEmail = ?1 and u.userPassword = ?2")
    Users findByEmailAndPassword(String email, String password);
}
