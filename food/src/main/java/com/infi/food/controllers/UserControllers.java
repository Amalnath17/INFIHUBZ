package com.infi.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infi.food.model.Users;
import com.infi.food.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserControllers {
    
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> addNewUser(@RequestBody Users u)
    {
        try{
            Users user = userService.addNewUser(u);
            return ResponseEntity.ok(u);
        }catch(Exception e){
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<?> loginValid(@PathVariable("email") String email,@PathVariable("password") String password)
    {
        try{

            Users user = userService.findByEmailAndPassword(email,password);
            if(user!=null)
                return ResponseEntity.ok(user);
            else
                return ResponseEntity.status(404).body("User Not Found");
        }catch(Exception e){
            return ResponseEntity.status(500).build();
        }
    }
   
}
