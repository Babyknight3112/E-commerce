package com.example.myproject.Service;

import com.example.myproject.DTO.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    ProductResponse getProductById(int id);

    ProductResponse getProductByName(String name);

    List<ProductResponse> getAllProduct();

    List<ProductResponse> getAllProductByPrice();

    ProductResponse addProduct(ProductCreate productCreate);

    UpdateNotify updateProduct(int id, ProductUpdate product);

    DeleteNotify deleteProduct(int id);

}
