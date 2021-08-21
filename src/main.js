const express = require('express');

const route = express.Router();
const customer = require('./Routes/Customer')

route.use('/', customer);

route.use('*', (req, res) => {
  res.status(404).json('page not found!');
});

module.exports = route;