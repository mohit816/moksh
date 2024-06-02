package com.sample.ecofriendly.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.ecofriendly.model.Shipment;
import com.sample.ecofriendly.repository.ShipmentRepository;

@Service
public class ShipmentService {
    @Autowired
    private ShipmentRepository shipmentRepository;

    public Shipment createShipment(String orderId, String trackingNumber, String carrier, Date estimatedDeliveryDate) {
        Shipment shipment = new Shipment();
        shipment.setOrderId(orderId);
        shipment.setTrackingNumber(trackingNumber);
        shipment.setCarrier(carrier);
        shipment.setShippedAt(new Date());
        shipment.setEstimatedDeliveryDate(estimatedDeliveryDate);
        shipment.setStatus("IN_TRANSIT");
        return shipmentRepository.save(shipment);
    }

    public Shipment updateShipmentStatus(String shipmentId, String status) {
        Optional<Shipment> optionalShipment = shipmentRepository.findById(shipmentId);
        if (optionalShipment.isPresent()) {
            Shipment shipment = optionalShipment.get();
            shipment.setStatus(status);
            return shipmentRepository.save(shipment);
        }
        return null;
    }

    public List<Shipment> getShipmentsByOrderId(String orderId) {
        return shipmentRepository.findByOrderId(orderId);
    }

    public Optional<Shipment> getShipmentById(String shipmentId) {
        return shipmentRepository.findById(shipmentId);
    }
}
