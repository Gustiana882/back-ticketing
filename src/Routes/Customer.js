const express = require('express');

const route = express.Router();
const Booking = require('../Controllers/Customer/controller_Booking');
const usersMethod = require('../Controllers/Customer/User');
const loginMethod = require('../Controllers/Customer/Login');
const priceMethod = require('../Controllers/Price');
const validate = require('../middleware/validate');
const Schedule = require('../Controllers/Customer/controllers_schedule');
const Destination = require('../Controllers/Admin/controllers_destination');

route.post('/login', loginMethod.login);
route.post('/register', usersMethod.registerUser);

route.get('/user', usersMethod.getUser);
route.get('/my-booking', Booking.getMyBooking);
route.post('/booking', Booking.BookingTicket);

route.get('/profile/:email', usersMethod.getUserProfile);
route.put('/profile', validate('customer'), usersMethod.updateProfile);

// find ticket

route.get('/schedule/all', Schedule.getAll);

route.get('/price/:id', priceMethod.getPriceById);
route.get('/price-maskapai', priceMethod.getPriceByIdMaskapai);

route.get('/destination/all', Destination.getAll);
route.get('/destination/:other', Destination.getOther);

route.get('/schedule/:id_schedule', Schedule.getByID);
route.get('/schedule/update', Schedule.updateData);
route.get('/schedule/searchticket', Schedule.findTicket);
route.get('/search', Schedule.findTicket);

module.exports = route;
