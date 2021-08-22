const { DataTypes } = require('sequelize');
const db = require('../Config/dbConnec');

class MyBooking {
  constructor() {
    this.table = db.define('myBooking', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      namePerson: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailPerson: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phonePerson: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      namePassenger: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      insurance: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      statusPaymen: {
        type: DataTypes.BOOLEAN,
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

  getMyBookingById(id) {
    return new Promise((resolve, reject) => {
      this.table.findByPk(id)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getMyBookingByArrive(arrive) {
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

  getMyBookingByDeparture(departure) {
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

  getMyBookingByTransit(transit) {
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

  addMyBooking(data) {
    return new Promise((resolve, reject) => {
      this.table.create(data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  updateMyBooking(data) {
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

  deleteMyBooking(id) {
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

module.exports = new MyBooking();
