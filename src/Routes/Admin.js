const express = require('express');
const route = express.Router();

const priceMethod = require('../Controllers/Price');

route.post('/price', priceMethod.addPriceMaskapai);
route.put('/price', priceMethod.updatePriceById);
route.get('/price', priceMethod.getPriceById);
route.get('/price_class', priceMethod.getPriceByClass);

module.exports = route;
