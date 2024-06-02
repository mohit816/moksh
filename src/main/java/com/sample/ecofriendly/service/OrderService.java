package com.sample.ecofriendly.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.sample.ecofriendly.model.Order;
import com.sample.ecofriendly.model.OrderStatus;
import com.sample.ecofriendly.model.Product;
import com.sample.ecofriendly.repository.OrderRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private SimpMessagingTemplate template;

    public Order createOrder(String userId, List<Product> products) {
        Order order = new Order(userId, products, "PLACED", new Date(), new Date());
        return orderRepository.save(order);
    }

    public Order updateOrderStatus(String orderId, String status) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setStatus(status);
            order.setUpdatedAt(new Date());
            orderRepository.save(order);

            // Send status update via WebSocket
            template.convertAndSend("/topic/status", new OrderStatus(orderId, status));
            return order;
        }
        return null;
    }

    public List<Order> getUserOrders(String userId) {
        return orderRepository.findByUserId(userId);
    }

    public Optional<Order> getOrderById(String orderId) {
        return orderRepository.findById(orderId);
    }
}
