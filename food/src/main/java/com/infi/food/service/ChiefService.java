package com.infi.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infi.food.model.Chief;
import com.infi.food.model.Order;
import com.infi.food.repository.ChiefRepo;
import com.infi.food.repository.OrderRepo;

@Service
public class ChiefService {
    
    @Autowired
    private ChiefRepo chiefRepo;

    @Autowired 
    private OrderRepo orderRepo;

    public Chief addnew(Chief c) {
        return chiefRepo.save(c);
    }

    public List<Order> get() {
        List<Order> o = orderRepo.findAll();
        return o;
    }

}
