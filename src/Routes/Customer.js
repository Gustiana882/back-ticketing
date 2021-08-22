const express = require('express');
const route = express.Router();
const Home = require('../Controllers/Customer/Home');
const usersMethod = require('../Controllers/Customer/User');
const loginMethod = require('../Controllers/Customer/Login');
const priceMethod = require('../Controllers/Price');
const validate = require('../middleware/validate');

route.get('/', Home);
route.get('/user', usersMethod.getUser);
route.post('/login', loginMethod.login);
route.put('/profile', validate('customer'), usersMethod.updateProfile);
route.post('/register', usersMethod.registerUser);

route.get('/price/:id', priceMethod.getPriceById);
route.get('/price-maskapai', priceMethod.getPriceByIdMaskapai);

module.exports = route;
