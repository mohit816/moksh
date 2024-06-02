package com.sample.ecofriendly.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "shipments")
public class Shipment {
	@Id
    private String id;
    private String orderId;
    private String trackingNumber;
    private String carrier;
    private Date shippedAt;
    private Date estimatedDeliveryDate;
    private String status; // Enum for status: IN_TRANSIT, OUT_FOR_DELIVERY, DELIVERED

    // Constructors
    public Shipment() {
    }

    public Shipment(String id,String orderId, String trackingNumber, String carrier, Date shippedAt, Date estimatedDeliveryDate, String status) {
       this.id=id;
    	this.orderId = orderId;
        this.trackingNumber = trackingNumber;
        this.carrier = carrier;
        this.shippedAt = shippedAt;
        this.estimatedDeliveryDate = estimatedDeliveryDate;
        this.status = status;
    }

    // Getters and Setters
    
    
    
    public String getOrderId() {
        return orderId;
    }

    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public String getCarrier() {
        return carrier;
    }

    public void setCarrier(String carrier) {
        this.carrier = carrier;
    }

    public Date getShippedAt() {
        return shippedAt;
    }

    public void setShippedAt(Date shippedAt) {
        this.shippedAt = shippedAt;
    }

    public Date getEstimatedDeliveryDate() {
        return estimatedDeliveryDate;
    }

    public void setEstimatedDeliveryDate(Date estimatedDeliveryDate) {
        this.estimatedDeliveryDate = estimatedDeliveryDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}