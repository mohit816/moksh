package com.sample.ecofriendly.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sample.ecofriendly.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
}
