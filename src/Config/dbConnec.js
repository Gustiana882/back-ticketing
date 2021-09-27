const { Sequelize } = require('sequelize');

// const db = new Sequelize({
//   username: process.env.PGUSER,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   host: process.env.PGHOST,
//   dialect: 'postgres',
//   logging: false,
// });

const db = new Sequelize({
  host: '0.0.0.0',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },
  storage: 'data/database.sqlite',
});

module.exports = db;
