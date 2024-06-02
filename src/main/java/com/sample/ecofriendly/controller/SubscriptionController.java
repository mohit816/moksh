package com.sample.ecofriendly.controller;

import com.sample.ecofriendly.model.Subscription;
import com.sample.ecofriendly.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription subscription) {
        Subscription createdSubscription = subscriptionService.createSubscription(subscription);
        return ResponseEntity.ok(createdSubscription);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Subscription>> getUserSubscriptions(@PathVariable String userId) {
        List<Subscription> subscriptions = subscriptionService.getUserSubscriptions(userId);
        return ResponseEntity.ok(subscriptions);
    }

    @PutMapping("/cancel/{subscriptionId}")
    public ResponseEntity<Subscription> cancelSubscription(@PathVariable String subscriptionId) {
        Subscription canceledSubscription = subscriptionService.cancelSubscription(subscriptionId);
        return ResponseEntity.ok(canceledSubscription);
    }
}
