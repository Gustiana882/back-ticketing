const express = require('express');

const route = express.Router();
const Destination = require('../Controllers/Admin/controllers_destination');
const Maskapai = require('../Controllers/Admin/controllers_maskapai');
const Schedule = require('../Controllers/Admin/controllers_schedule');
const Booking = require('../Controllers/Admin/controller_booking_ticket');
const upload = require('../Middleware/Upload');

route.get('/destination/all', Destination.getAll); // get all data tabel Destination
route.post('/destination/add', upload.single('image'), Destination.addData); // add data tabel Destination
route.put('/destination/update', upload.single('image'), Destination.updateData); // update data tabel Destination
route.delete('/destination/del/:id_destination', Destination.removeData); // remove data tabel Destination

route.get('/maskapai/all', Maskapai.getAll); // get all data tabel Maskapai
route.post('/maskapai/add', upload.single('image'), Maskapai.addData); // add data tabel Maskapai
route.put('/maskapai/update', upload.single('image'), Maskapai.updateData); // update data tabel Maskapai
route.delete('/maskapai/del/:id_maskapai', Maskapai.removeData); // remove data tabel Maskapai

route.get('/schedule/all', Schedule.getAll); // get all data tabel Schedule
route.post('/schedule/add', Schedule.addData); // add data tabel Schedule
route.put('/schedule/update', Schedule.updateData); // update data tabel Schedule
route.delete('/schedule/del/:id_schedule', Schedule.removeData); // remove data tabel Schedule

route.get('/booking/all', Booking.getAllBooking);
route.get('/booking/status-payment/status', Booking.StatusPayment);
route.get('/booking/history', Booking.history);


module.exports = route;
