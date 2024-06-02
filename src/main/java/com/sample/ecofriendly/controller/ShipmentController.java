package com.sample.ecofriendly.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sample.ecofriendly.model.Shipment;
import com.sample.ecofriendly.service.ShipmentService;

@RestController
@RequestMapping("/api/shipments")
public class ShipmentController {
    @Autowired
    private ShipmentService shipmentService;

    @PostMapping
    public ResponseEntity<Shipment> createShipment(@RequestParam String orderId,
                                                   @RequestParam String trackingNumber,
                                                   @RequestParam String carrier,
                                                   @RequestParam Date estimatedDeliveryDate) {
        Shipment shipment = shipmentService.createShipment(orderId, trackingNumber, carrier, estimatedDeliveryDate);
        return ResponseEntity.ok(shipment);
    }

    @PutMapping("/{shipmentId}/status")
    public ResponseEntity<Shipment> updateShipmentStatus(@PathVariable String shipmentId, @RequestParam String status) {
        Shipment shipment = shipmentService.updateShipmentStatus(shipmentId, status);
        if (shipment != null) {
            return ResponseEntity.ok(shipment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<Shipment>> getShipmentsByOrderId(@PathVariable String orderId) {
        List<Shipment> shipments = shipmentService.getShipmentsByOrderId(orderId);
        return ResponseEntity.ok(shipments);
    }

    @GetMapping("/{shipmentId}")
    public ResponseEntity<Shipment> getShipmentById(@PathVariable String shipmentId) {
        Optional<Shipment> shipment = shipmentService.getShipmentById(shipmentId);
        if (shipment.isPresent()) {
            return ResponseEntity.ok(shipment.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
