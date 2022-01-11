package com.example.myproject.Entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @Column(nullable = false)
    private String name;

    private String image;

    private String sub1;

    private String sub2;

    private String sub3;

    private String sub4;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int countInStock;

    @Column(columnDefinition = "float default 0")
    private float rating;

    @Column(columnDefinition = "integer default 0")
    private int numReviews;


}
