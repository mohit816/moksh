package com.sample.ecofriendly.service;

import com.sample.ecofriendly.model.Payment;
import com.sample.ecofriendly.repository.PaymentRepository;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private StripeService stripeService;

    public Payment processPayment(String userId, String amount, String currency, String paymentMethod) throws StripeException {
        PaymentIntent paymentIntent = stripeService.createPaymentIntent(amount, currency);
        
        Payment payment = new Payment();
        payment.setUserId(userId);
        payment.setAmount(Double.parseDouble(amount));
        payment.setPaymentDate(LocalDateTime.now());
        payment.setStatus("PENDING");
        payment.setPaymentMethod(paymentMethod);
        payment.setStripePaymentIntentId(paymentIntent.getId());
        payment.setTransactionId(UUID.randomUUID().toString()); // Generate a unique transaction ID

        return paymentRepository.save(payment);
    }

    public Payment confirmPayment(String transactionId) throws StripeException {
        Payment payment = paymentRepository.findByTransactionId(transactionId);
        if (payment == null) {
            throw new IllegalArgumentException("Payment not found with transaction ID: " + transactionId);
        }

        PaymentIntent paymentIntent = stripeService.confirmPayment(payment.getStripePaymentIntentId());
        if ("succeeded".equals(paymentIntent.getStatus())) {
            payment.setStatus("COMPLETED");
        } else {
            payment.setStatus("FAILED");
        }

        return paymentRepository.save(payment);
    }

    public List<Payment> getUserPayments(String userId) {
        return paymentRepository.findByUserId(userId);
    }
}
