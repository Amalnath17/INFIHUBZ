package com.infi.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infi.food.model.Address;
import com.infi.food.repository.AddressRepo;

@Service
public class AddressService {
    
    @Autowired
    private AddressRepo addressRepo;

    public Address adduser(Address a) {
        return addressRepo.save(a);
    }

    public Long getId() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getId'");
    }
}
