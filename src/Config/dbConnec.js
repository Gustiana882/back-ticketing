const { Sequelize } = require('sequelize');

const db = new Sequelize({
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

module.exports = db;
