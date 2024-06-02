package com.sample.ecofriendly.controller;

import com.sample.ecofriendly.model.Payment;
import com.sample.ecofriendly.service.PaymentService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/process")
    public ResponseEntity<Payment> processPayment(@RequestParam String userId,
                                                  @RequestParam String amount,
                                                  @RequestParam String currency,
                                                  @RequestParam String paymentMethod) {
        try {
            Payment processedPayment = paymentService.processPayment(userId, amount, currency, paymentMethod);
            return ResponseEntity.ok(processedPayment);
        } catch (StripeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/confirm/{transactionId}")
    public ResponseEntity<Payment> confirmPayment(@PathVariable String transactionId) {
        try {
            Payment confirmedPayment = paymentService.confirmPayment(transactionId);
            return ResponseEntity.ok(confirmedPayment);
        } catch (StripeException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Payment>> getUserPayments(@PathVariable String userId) {
        List<Payment> payments = paymentService.getUserPayments(userId);
        return ResponseEntity.ok(payments);
    }
}
