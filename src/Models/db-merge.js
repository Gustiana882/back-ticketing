const MyBooking = require('./models_booking');
const Time = require('./Time');

const Merge = () => {
  MyBooking.table.sync({ force: true });
  Time.table.sync({ force: true });
};

module.exports = Merge;
