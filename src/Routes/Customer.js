const express = require('express');

const route = express.Router();
const Home = require('../Controllers/Customer/Home');
const Booking = require('../Controllers/Customer/controller_Booking');
const usersMethod = require('../Controllers/Customer/User');
const loginMethod = require('../Controllers/Customer/Login');
const priceMethod = require('../Controllers/Price');
const validate = require('../middleware/validate');
const Schedule = require('../Controllers/Customer/controllers_schedule');

route.get('/', Home);
route.get('/my-booking', Booking.getMyBooking);
route.post('/booking', Booking.BookingTicket);

route.get('/', Home);
route.get('/user/:email', validate('customer'), usersMethod.getUser);
route.post('/login', loginMethod.login);
route.put('/profile', validate('customer'), usersMethod.updateProfile);
route.post('/register', usersMethod.registerUser);

route.get('/price/:id', priceMethod.getPriceById);
route.get('/price-maskapai', priceMethod.getPriceByIdMaskapai);

// route.get('/find', Schedule.findAll);

route.get('/schedule/:id_schedule', Schedule.getByID);
route.get('/schedule/update', Schedule.updateData);
route.get('/schedule/searchticket', Schedule.findTicket);

module.exports = route;
