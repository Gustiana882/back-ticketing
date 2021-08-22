const { Sequelize } = require('sequelize');

const db = new Sequelize({
<<<<<<< HEAD
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
=======
  username: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
