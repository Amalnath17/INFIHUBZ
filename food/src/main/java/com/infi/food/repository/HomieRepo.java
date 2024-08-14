package com.infi.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.infi.food.model.Homie;

@Repository
public interface HomieRepo extends JpaRepository<Homie,Long>
{

    @Query("select u from Homie u where u.email = ?1 and u.password = ?2")
    Homie findByEmailAndPassword(String email, String password);

} 