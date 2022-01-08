package com.example.myproject.Controller;

import com.example.myproject.DTO.ProductCreate;
import com.example.myproject.DTO.ProductResponse;
import com.example.myproject.DTO.ProductUpdate;
import com.example.myproject.Service.ProductService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/product/post")
    public ProductResponse addProduct(@RequestBody ProductCreate productCreate) {
        return productService.addProduct(productCreate);
    }

    @PutMapping("/product/put/{id}")
    public String updateProduct(@PathVariable("id") int id, @RequestBody ProductUpdate productUpdate) {
        return productService.updateProduct(id, productUpdate);
    }

    @DeleteMapping("/product/delete/{id}")
    public String deleteProduct(@PathVariable("id") int id) {
        return productService.deleteProduct(id);
    }

}
