package com.sample.ecofriendly.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.sample.ecofriendly.model.OrderStatus;

@Controller
public class WebSocketController {

    @MessageMapping("/status")
    @SendTo("/topic/status")
    public OrderStatus updateStatus(OrderStatus orderStatus) {
        return orderStatus;
    }
}
