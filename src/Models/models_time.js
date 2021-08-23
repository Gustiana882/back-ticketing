/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const { DataTypes } = require('sequelize');
const orm = require('../Config/dbConnec');

class Time {
  constructor() {
    this.table = orm.define(
      'times',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        berangkat: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        tiba: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        transit: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      },
    );
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [['id', 'DESC']],
        })
        .then((res) => {
          const productJSON = res;
          const datatime = productJSON.map((data) => {
            const object = {
              id: data.id,
              berangkat: data.berangkat,
              tiba: data.tiba,
              transit: data.transit,
            };
            return object;
          });
          resolve(datatime);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  AddData(data) {
    return new Promise((resolve, reject) => {
      this.table
        .create(data)
        .then((res) => {
          resolve('Add time success');
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  UpdateData(data) {
    return new Promise((resolve, reject) => {
      this.table
        .update(
          {
            id: data.id,
            berangkat: data.berangkat,
            tiba: data.tiba,
            transit: data.transit,
          },
          {
            where: {
              id: data.id,
            },
          },
        )
        .then((res) => {
          resolve('Update time success');
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  DeleteData(id_del) {
    return new Promise((resolve, reject) => {
      this.table
        .destroy({
          where: {
            id: id_del,
          },
        })
        .then((res) => {
          resolve('Delete time success');
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = new Time();
