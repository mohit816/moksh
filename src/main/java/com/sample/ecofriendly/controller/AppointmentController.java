package com.sample.ecofriendly.controller;

import com.sample.ecofriendly.model.Appointment;
import com.sample.ecofriendly.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> scheduleAppointment(@RequestBody Appointment appointment) {
        Appointment scheduledAppointment = appointmentService.scheduleAppointment(appointment);
        return ResponseEntity.ok(scheduledAppointment);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Appointment>> getUserAppointments(@PathVariable String userId) {
        List<Appointment> appointments = appointmentService.getUserAppointments(userId);
        return ResponseEntity.ok(appointments);
    }

    @PutMapping("/cancel/{appointmentId}")
    public ResponseEntity<Appointment> cancelAppointment(@PathVariable String appointmentId) {
        Appointment canceledAppointment = appointmentService.cancelAppointment(appointmentId);
        return ResponseEntity.ok(canceledAppointment);
    }
}