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
        product.setSub1(productCreate.getSub1());
        product.setSub2(productCreate.getSub2());
        product.setSub3(productCreate.getSub3());
        product.setSub4(productCreate.getSub4());
        product.setBrand(productCreate.getBrand());
        product.setCategory(productCreate.getCategory());
        product.setPrice(productCreate.getPrice());
        product.setCountInStock(productCreate.getPrice());
        return product;
    }


    public ProductResponse toProductResponse(Product product){
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getImage(),
                product.getSub1(),
                product.getSub2(),
                product.getSub3(),
                product.getSub4(),
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
