package com.example.myproject.Repository;

import com.example.myproject.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Product findProductById(int id);
    Product findProductByName(String name);
}
