const response = require('../../Helpers/StandarRespon');
const model = require('../../Models/models_booking');

const bookingTicket = {};

bookingTicket.getAllBooking = async (req, res) => {
  try {
    const result = await model.getAll();
    if (result) {
      response(res, 200, result);
    }
  } catch (error) {
    response(res, 400, { message: error }, true);
  }
};

bookingTicket.StatusPayment = async (req, res) => {
  try {
    const { status } = req.params;
    const result = await model.getBookingByStatusPay(status);
    if (result) {
      response(res, 200, result);
    }
  } catch (error) {
    response(res, 400, { message: error }, true);
  }
};

bookingTicket.history = async (req, res) => {
  try {
    const result = await model.getHistory();
    if (result) {
      response(res, 200, result);
    }
  } catch (error) {
    response(res, 400, { message: error }, true);
  }
};

module.exports = bookingTicket;
