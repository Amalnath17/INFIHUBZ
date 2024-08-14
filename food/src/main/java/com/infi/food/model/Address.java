package com.infi.food.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long addressId;

    private String firstName;

    private String lastName;

    private String email;

    private String street;

    private String city;

    private String state;

    private Integer zipCode;

    private String country;

    private Integer phoneNumber;


}
