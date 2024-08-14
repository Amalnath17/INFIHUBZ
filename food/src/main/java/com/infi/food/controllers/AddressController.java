package com.infi.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infi.food.model.Address;
import com.infi.food.service.AddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "http://localhost:5173")
public class AddressController {
    
    @Autowired
    private AddressService addressService;

    @PostMapping("/add")
    public ResponseEntity<Address> addUser(@RequestBody Address a)
    {
        try{
            Address address=addressService.adduser(a);
            return ResponseEntity.ok(address);
        }
        catch(Exception e){
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/address")
    private ResponseEntity<Long> getId()
    {
        try{
            Long add=addressService.getId();
            return ResponseEntity.ok(add);
        }
        catch(Exception e){
            return ResponseEntity.status(404).build();
        }
    }
}
