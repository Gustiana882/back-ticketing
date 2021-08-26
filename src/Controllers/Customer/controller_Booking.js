/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const response = require('../../Helpers/StandarRespon');
const model = require('../../Models/models_booking');
// const schedule = require('../../Models/models_schedule');
const valid = require('../../Helpers/NullValidation');
const decode = require('../../Helpers/DecodeToken');

const controler = {};

controler.BookingTicket = async (req, res) => {
  try {
    const token = await decode(req.headers.token);
    const {
      idSchedule,
      namePerson,
      emailPerson,
      phonePerson,
      namePassenger,
      nationality,
      totalPrice,
      insurance,
    } = req.body;

    /** validation null */

    if (valid(namePerson)) {
      return response(res, 200, { message: 'name person not null' }, true);
    }
    if (valid(emailPerson)) {
      return response(res, 200, { message: 'email person not null' }, true);
    }
    if (valid(phonePerson)) {
      return response(res, 200, { message: 'phone person not null' }, true);
    }
    if (valid(namePassenger)) {
      return response(res, 200, { message: 'name passenger not null' }, true);
    }
    if (valid(nationality)) {
      return response(
        res,
        200,
        { message: 'nationality pasenger not null' },
        true,
      );
    }
    if (valid(totalPrice)) {
      return response(res, 200, { message: 'price not null' }, true);
    }
    if (valid(insurance)) {
      return response(res, 200, { message: 'price not null' }, true);
    }
    const data = {
      idSchedule,
      emailUser: token.user,
      namePerson,
      emailPerson,
      phonePerson,
      namePassenger,
      nationality,
      totalPrice,
      insurance,
      statusPaymen: false,
    };

    const result = await model.addMyBooking(data);

    if (result) {
      response(res, 200, { message: 'Bopking ticket berhasil' });
    }
  } catch (error) {
    response(res, 400, { message: error }, true);
  }
};

controler.getMyBooking = async (req, res) => {
  try {
    const token = await decode(req.headers.token);
    const result = await model.getMyBookingByEmailUser(token.user);
    if (result) {
      response(res, 200, result);
    }
  } catch (error) {
    response(res, 400, { msg: error.message }, true);
  }
};

module.exports = controler;
