package com.sample.ecofriendly.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "shipments")
public class Shipment {
    @Id
    private String id;
    private String orderId;
    private String status; // SHIPPED, IN_TRANSIT, DELIVERED
    private Date shippedAt;
    private Date deliveredAt;
    private Date updatedAt;

    // Constructors
    public Shipment() {
    }

    public Shipment(String orderId, String status, Date shippedAt, Date deliveredAt, Date updatedAt) {
        this.orderId = orderId;
        this.status = status;
        this.shippedAt = shippedAt;
        this.deliveredAt = deliveredAt;
        this.updatedAt = updatedAt;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getShippedAt() {
        return shippedAt;
    }

    public void setShippedAt(Date shippedAt) {
        this.shippedAt = shippedAt;
    }

    public Date getDeliveredAt() {
        return deliveredAt;
    }

    public void setDeliveredAt(Date deliveredAt) {
        this.deliveredAt = deliveredAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
