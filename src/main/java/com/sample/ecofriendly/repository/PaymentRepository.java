package com.sample.ecofriendly.repository;

import com.sample.ecofriendly.model.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PaymentRepository extends MongoRepository<Payment, String> {
    List<Payment> findByUserId(String userId);
    Payment findByTransactionId(String transactionId); // Find payment by transaction ID
}
