package com.infi.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infi.food.model.Users;
import com.infi.food.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public Users addNewUser(Users u) {
        return userRepo.save(u);
    }

    public Users findByEmailAndPassword(String email, String password) {
        return userRepo.findByEmailAndPassword(email,password);
    }
    
}
