package com.infi.food.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.infi.food.dto.OrderDTO;
import com.infi.food.model.Address;
import com.infi.food.model.Food;
import com.infi.food.model.Order;
import com.infi.food.model.Users;
import com.infi.food.repository.AddressRepo;
import com.infi.food.repository.AdminfoodRepo;
import com.infi.food.repository.OrderRepo;
import com.infi.food.repository.UserRepo;

@Service
@RequestMapping("/admin")
public class AdminfoodService {
    
    @Autowired
    private AdminfoodRepo adminfoodRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private OrderRepo orderRepo;

    public Food addNewItem(Food f) {
        return adminfoodRepo.save(f);
    }

    public List<Food> fetchItem() {
        return adminfoodRepo.findAll();
    }

    public void delItem(long id) {
        adminfoodRepo.deleteById(id);
    }

    public List<Order> addOrder(List<OrderDTO> orderDTOList) {
        List<Order> orders = new ArrayList<>();

        for (OrderDTO dto : orderDTOList) {
            Users user = userRepo.findById(dto.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
            Food food = adminfoodRepo.findById(dto.getFoodId()).orElseThrow(() -> new RuntimeException("Food not found"));
            Address address = addressRepo.findById(dto.getAddressId()).orElseThrow(() -> new RuntimeException("Address not found"));

            Order order = new Order();
            order.setUsers(user);
            order.setFood(food);
            order.setAddress(address);
            order.setQuantity(dto.getQuantity());
            order.setDateTime(LocalDateTime.now());

            orders.add(order);
        }

        return orderRepo.saveAll(orders);
    }

}
