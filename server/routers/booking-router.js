const express = require('express');
const router = express.Router();

const { createBooking } = require('../controllers/booking-controller');

// Define the route for creating a booking 
router.route("/bookings").post(createBooking);


module.exports = router; 