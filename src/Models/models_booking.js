const { DataTypes } = require('sequelize');
const db = require('../Config/dbConnec');
const schedule = require('./models_schedule');

class Booking {
  constructor() {
    this.table = db.define('bookings', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idSchedule: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      emailUser: {
        type: DataTypes.STRING,
        allowNull: false,
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }

  getMyBookingById(id) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
          include: [
            {
              model: schedule.table,
              as: 'schedule',
            },
          ],
          where: {
            id,
          },
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getHistory() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
          include: [
            {
              model: schedule.table,
              as: 'schedule',
            },
          ],
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  getBookingByStatusPay(status) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
          include: [
            {
              model: schedule.table,
              as: 'schedule',
            },
          ],
          where: {
            statusPaymen: status,
          },
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getMyBookingByEmailUser(emailUser) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
          where: {
            emailUser,
          },
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getMyBookingByArrive(arrive) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
          include: [
            {
              model: schedule.table,
              as: 'schedule',
            },
          ],
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
      this.table
        .findAll({
          order: [['id', 'DESC']],
          include: [
            {
              model: schedule.table,
              as: 'schedule',
            },
          ],
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
      this.table
        .findAll({
          order: [['id', 'DESC']],
          include: [
            {
              model: schedule.table,
              as: 'schedule',
            },
          ],
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
      this.table
        .create(data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  updateMyBooking(data) {
    return new Promise((resolve, reject) => {
      this.table
        .update(data, {
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
      this.table
        .destroy({
          where: {
            id,
          },
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}

module.exports = new Booking();
