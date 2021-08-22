const { Sequelize } = require('sequelize');

const db = new Sequelize({
  username: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
