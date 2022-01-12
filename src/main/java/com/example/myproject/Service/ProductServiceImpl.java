package com.example.myproject.Service;


import com.example.myproject.DTO.*;
import com.example.myproject.Entity.Product;
import com.example.myproject.Mapper.Mapper;
import com.example.myproject.Repository.ProductRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final Mapper mapper;

    public ProductServiceImpl(ProductRepository productRepository, Mapper mapper) {
        this.productRepository = productRepository;
        this.mapper = mapper;
    }

    @Override
    public ProductResponse getProductById(int id) {
        return mapper.toProductResponse(productRepository.findProductById(id));
    }

    @Override
    public ProductResponse getProductByName(String name) {
        return mapper.toProductResponse(productRepository.findProductByName(name));
    }

    @Override
    public ProductResponse addProduct(ProductCreate productCreate) {
        Product product = mapper.toProduct(productCreate);
        productRepository.save(product);
        return mapper.toProductResponse(product);
    }

    @Override
    public List<ProductResponse> getAllProduct() {
        List<Product> productList = productRepository.findAll();
        return productList.stream().map(mapper::toProductResponse).collect(Collectors.toList());
    }

    @Override
    public List<ProductResponse> getAllProductByPrice() {
        List<Product> productList = productRepository.findAll(Sort.by(Sort.Direction.ASC, "price"));
        return productList.stream().map(mapper::toProductResponse).collect(Collectors.toList());
    }

    @Override
    public UpdateNotify updateProduct(int id, ProductUpdate productUpdate) {
        Product product = productRepository.findProductById(id);
        product.setName(productUpdate.getName());
        product.setDescription(productUpdate.getDescription());
        product.setBrand(productUpdate.getBrand());
        product.setCategory(productUpdate.getCategory());
        product.setPrice(productUpdate.getPrice());
        product.setImage(productUpdate.getImage());

        productRepository.save(product);
        return new UpdateNotify();
    }

    @Override
    public DeleteNotify deleteProduct(int id) {
        productRepository.delete(productRepository.findProductById(id));
        return new DeleteNotify();
    }
}
