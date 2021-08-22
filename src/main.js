const express = require('express');

const route = express.Router();
const customer = require('./Routes/Customer');
const admin = require('./Routes/Admin');
<<<<<<< HEAD
const { cloudConfig } = require('./configs/cloudinary');
=======
const { cloudConfig } = require('./Config/cloudinary');
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3

route.use('*', cloudConfig);

route.use('/', customer);
route.use('/admin', admin);

route.use('*', (req, res) => {
  res.status(404).json('page not found!');
});

module.exports = route;
