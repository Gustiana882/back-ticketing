const express = require('express');
const route = express.Router();
const Home = require('../Controllers/Customer/Home');

route.get('/', Home);

module.exports = route;