const express = require('express');

const route = express.Router();
const Home = require('../Controllers/Customer/Home');
const Booking = require('../Controllers/Customer/controller_Booking');

route.get('/', Home);
route.get('/my-booking', Booking.getMyBooking);
route.post('/booking', Booking.BookingTicket);

module.exports = route;
