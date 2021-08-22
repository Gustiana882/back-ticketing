const MyBooking = require('./MyBooking');
const Time = require('./Time');

const Merge = () => {
  MyBooking.table.sync({ force: true });
  Time.table.sync({ force: true });
};

module.exports = Merge;
