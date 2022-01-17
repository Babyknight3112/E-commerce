package com.example.myproject.DTO;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ProductUpdate {

    @NotBlank
    private String name;

    @NotBlank
    private String image;

    @NotBlank
    private String description;

    private String brand;

    @NotBlank
    private String category;

    @NotBlank
    private int price;
}
