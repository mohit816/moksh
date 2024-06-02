package com.sample.ecofriendly.service;

import com.sample.ecofriendly.model.Subscription;
import com.sample.ecofriendly.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public Subscription createSubscription(Subscription subscription) {
        subscription.setStartDate(LocalDate.now());
        subscription.setEndDate(subscription.getStartDate().plusMonths(1)); // Example: 1-month subscription
        subscription.setStatus("ACTIVE");
        return subscriptionRepository.save(subscription);
    }

    public List<Subscription> getUserSubscriptions(String userId) {
        return subscriptionRepository.findByUserId(userId);
    }

    public Subscription cancelSubscription(String subscriptionId) {
        Subscription subscription = subscriptionRepository.findById(subscriptionId).orElseThrow(() -> new RuntimeException("Subscription not found"));
        subscription.setStatus("CANCELLED");
        return subscriptionRepository.save(subscription);
    }
}