package com.infi.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infi.food.model.Homie;
import com.infi.food.repository.HomieRepo;

@Service
public class HomieService {

    @Autowired
    private HomieRepo homieRepo;

    public Homie addNewUser(Homie u) {
       return homieRepo.save(u);
    }

	public Homie findByEmailAndPassword(String email, String password) {
        return homieRepo.findByEmailAndPassword(email,password);
	}
    
}
