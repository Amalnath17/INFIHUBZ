package com.infi.food.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Food {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long foodId;

    private String foodName;

    @Lob
    @Column(name="food_image",columnDefinition = "longtext")
    private String foodImage; 

    private String foodDescription;

    private String foodCategory;

    private int foodPrice;
    
}
