const response = require('../../Helpers/StandarRespon');
const Db = require('../../Models/MyBooking');

const standarObject = {
  namePerson, emailPerson, phonePerson, title, name, nationality,
}

const BookingTicket = async (req, res) => {
  try {
    const {
      namePerson, emailPerson, phonePerson, title, name, nationality,
    } = req.body;
    const data = {
      namePerson, emailPerson, phonePerson, title, name, nationality,
    };
  } catch (error) {
    response(res, 400, { message: 'error' }, true);
  }
};

module.exports = BookingTicket;
