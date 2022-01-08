package com.example.myproject.Mapper;

import com.example.myproject.DTO.ProductCreate;
import com.example.myproject.DTO.ProductResponse;
import com.example.myproject.Entity.Product;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public Product toProduct(ProductCreate productCreate){
        Product product = new Product();
        product.setName(productCreate.getName());
        product.setDescription(productCreate.getDescription());
        product.setImage(productCreate.getImage());
        product.setBrand(productCreate.getBrand());
        product.setCategory(productCreate.getCategory());
        product.setPrice(productCreate.getPrice());
        product.setCountInStock(productCreate.getPrice());
        return product;
    }


    public ProductResponse toProductResponse(Product product){
        return new ProductResponse(
                product.getName(),
                product.getImage(),
                product.getDescription(),
                product.getBrand(),
                product.getCategory(),
                product.getPrice(),
                product.getCountInStock(),
                product.getRating(),
                product.getNumReviews()
        );
    }


}
