package com.example.myproject.Service;

import com.example.myproject.DTO.ProductCreate;
import com.example.myproject.DTO.ProductResponse;
import com.example.myproject.DTO.ProductUpdate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    ProductResponse getProductById(int id);

    ProductResponse getProductByName(String name);

    List<ProductResponse> getAllProduct();

    ProductResponse addProduct(ProductCreate productCreate);

    String updateProduct(int id, ProductUpdate product);

    String deleteProduct(int id);

}
