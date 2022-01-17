package com.example.myproject.DTO;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    @NotBlank
    private String category;

    @NotNull
    private int price;

    private int countInStock;

}
