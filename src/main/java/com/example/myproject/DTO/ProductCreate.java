package com.example.myproject.DTO;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ProductCreate {

    @NotBlank
    private String name;

    @NotBlank
    private String image;

    @NotBlank
    private String sub1;

    @NotBlank
    private String sub2;

    @NotBlank
    private String sub3;

    @NotBlank
    private String sub4;

    @NotBlank
    private String description;

    private String brand;

    private String category;

    private int price;

    private int countInStock;

}
