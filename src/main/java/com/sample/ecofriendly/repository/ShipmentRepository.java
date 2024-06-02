package com.sample.ecofriendly.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sample.ecofriendly.model.Shipment;

import java.util.List;

@Repository
public interface ShipmentRepository extends MongoRepository<Shipment, String> {
    List<Shipment> findByOrderId(String orderId);
}

