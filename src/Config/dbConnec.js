const { Sequelize } = require('sequelize')
const db = new Sequelize({
    username: 'devops',
    database: 'express',
    password: 'admin123',
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = db