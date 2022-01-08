package com.example.myproject.DTO;

import lombok.Data;

@Data
public class ProductUpdate {

    private String name;

    private String image;

    private String description;

    private String brand;

    private String category;

    private int price;
}
