package com.example.myproject.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductResponse {

    private int id;

    private String name;

    private String image;

    private String sub1;

    private String sub2;

    private String sub3;

    private String sub4;

    private String description;

    private String brand;

    private String category;

    private int price;

    private int countInStock;

    private float rating;

    private int numReviews;

}
