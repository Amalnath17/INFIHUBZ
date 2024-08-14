package com.infi.food.dto;

import lombok.Data;

@Data
public class OrderDTO {
    
    private Long userId;
    private Long addressId;
    private Integer quantity;
    private Long foodId;
    
}
