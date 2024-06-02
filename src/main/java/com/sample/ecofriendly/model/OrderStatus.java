package com.sample.ecofriendly.model;

public class OrderStatus {
    private String orderId;
    private String status;

    // Constructors, getters, and setters
    public OrderStatus() {
    }

    public OrderStatus(String orderId, String status) {
        this.orderId = orderId;
        this.status = status;
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
}
