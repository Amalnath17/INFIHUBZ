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
public class Chief {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long chiefId;

    private String custName; 

    private String firstName;
    
    private String lastName;
    
    private String email;
    
    private String nickname;
    
    private String website;
    
    private String telePhone;
    
    private String phone;
    
    private String twitter;

    private String facebook;

    private String google;

    private String country;

    private String city;

    private String biographical;

    @Lob
    @Column(name="face_image",columnDefinition = "longText" )
    private String faceImage;

    @Lob
    @Column(name="license_image",columnDefinition = "longText" )
    private String licenseImage;

    private String address;

}
