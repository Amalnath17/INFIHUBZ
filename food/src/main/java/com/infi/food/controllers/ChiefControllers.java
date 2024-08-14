package com.infi.food.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infi.food.model.Chief;
import com.infi.food.model.Order;
import com.infi.food.service.ChiefService;

@RestController
@RequestMapping("/chiefs")
@CrossOrigin(origins = "http://localhost:5173")
public class ChiefControllers 
{
    @Autowired
    private ChiefService chiefService;
    
    @PostMapping("/add")
    public ResponseEntity<?> addnew(@RequestBody Chief c)
    {
        try{
            Chief chief=chiefService.addnew(c);
            return ResponseEntity.ok(chief);
        }
        catch(Exception e){
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/food")
    public ResponseEntity<?> get()
    {
        try {
            List<Order> order=chiefService.get();
            return ResponseEntity.ok(order);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error retrieving orders");
        }
    }

}
