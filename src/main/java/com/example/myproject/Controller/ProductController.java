package com.example.myproject.Controller;

import com.example.myproject.DTO.*;
import com.example.myproject.Service.ProductService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/product/get/id/{id}")
    public ProductResponse getProductById(@PathVariable("id") int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/product/get/name/{name}")
    public ProductResponse getProductByName(@PathVariable("name") String name) {
        return productService.getProductByName(name);
    }

    @GetMapping("/product/get")
    public List<ProductResponse> getAllProduct() {
        return productService.getAllProduct();
    }

    @GetMapping("product/get/price")
    public List<ProductResponse> getAllProductByPrice() {
        return productService.getAllProductByPrice();
    }

    @PostMapping("/product/post")
    public ProductResponse addProduct(@Valid @RequestBody ProductCreate productCreate) {
        return productService.addProduct(productCreate);
    }

    @PutMapping("/product/put/{id}")
    public UpdateNotify updateProduct(@PathVariable("id") int id, @RequestBody ProductUpdate productUpdate) {
        return productService.updateProduct(id, productUpdate);
    }

    @DeleteMapping("/product/delete/{id}")
    public DeleteNotify deleteProduct(@PathVariable("id") int id) {
        return productService.deleteProduct(id);
    }

}
