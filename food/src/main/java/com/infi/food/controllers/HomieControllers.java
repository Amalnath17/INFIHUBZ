package com.infi.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infi.food.model.Homie;
import com.infi.food.service.HomieService;

@RestController
@RequestMapping("/hmi")
public class HomieControllers 
{
    @Autowired
    private HomieService homieService;
    
    @PostMapping("/add")
    public ResponseEntity<?> addNewUser(@RequestBody Homie u)
    {
        try{
            Homie user = homieService.addNewUser(u);
            return ResponseEntity.ok(u);
        }catch(Exception e){
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/add/{email}/{password}")
    public ResponseEntity<?> loginValid(@PathVariable("email") String email,@PathVariable("password") String password)
    {
        try{

            Homie user = homieService.findByEmailAndPassword(email,password);
            if(user!=null)
                return ResponseEntity.ok(user);
            else
                return ResponseEntity.status(404).body("User Not Found");
        }catch(Exception e){
            return ResponseEntity.status(500).build();
        }
    }
}
