const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');

// All booking routes start with /api/bookings (defined in server.js)
router.post('/', createBooking);
router.get('/', getBookings);

module.exports = router;
