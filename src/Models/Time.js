const { DataTypes } = require('sequelize');
const db = require('../Config/dbConnec');

class Time {
  constructor() {
    this.table = db.define('dbTime', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idMaskapai: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departure: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrive: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.table.findAll()
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }

  getTimeById(id) {
    return new Promise((resolve, reject) => {
      this.table.findByPk(id)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getTimeByArrive(arrive) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        where: {
          arrive,
        },
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getTimeByDeparture(departure) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        where: {
          departure,
        },
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getTimeByTransit(transit) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        where: {
          transit,
        },
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  addTime(data) {
    return new Promise((resolve, reject) => {
      this.table.create(data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  updateTime(data) {
    return new Promise((resolve, reject) => {
      this.table.update(data, {
        where: {
          id: data.id,
        },
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  deleteTime(id) {
    return new Promise((resolve, reject) => {
      this.table.destroy({
        where: {
          id,
        },
      }).then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}

module.exports = new Time();
