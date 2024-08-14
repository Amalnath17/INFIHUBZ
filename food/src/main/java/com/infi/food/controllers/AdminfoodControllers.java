package com.infi.food.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infi.food.dto.OrderDTO;
import com.infi.food.model.Food;
import com.infi.food.model.Order;
import com.infi.food.service.AdminfoodService;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminfoodControllers {

    @Autowired
    private AdminfoodService adminfoodService;
    
    @PostMapping("/add")
    public ResponseEntity<?> addNewItem(@RequestBody Food f)
    {
        try
        {
            Food food=adminfoodService.addNewItem(f);
            return ResponseEntity.ok(food);
        }
        catch(Exception e)
        {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listItem()
    {
        try{
            List<Food> l=adminfoodService.fetchItem();
            return ResponseEntity.ok(l);
        }
        catch(Exception e)
        {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delItem(@PathVariable long id)
    { 
        try{
            adminfoodService.delItem(id);
            return ResponseEntity.ok("Removed Sucessfully");
        }
        catch(Exception e)
        {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/orders")
    public ResponseEntity<?> addOrder(@RequestBody List<OrderDTO> orderDTO)
    {
        try{
            List<Order> order = adminfoodService.addOrder(orderDTO);
            return ResponseEntity.ok(order); 
        }catch(Exception e)
        {
            return ResponseEntity.status(500).build();
        }
    }

    
}
