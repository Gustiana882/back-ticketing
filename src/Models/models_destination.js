/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const { DataTypes, Op } = require('sequelize');
const orm = require('../Config/dbConnec');

class Destination {
  constructor() {
    this.table = orm.define('destinations', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      negara: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
      }).then((res) => {
        const productJSON = res;
        const dataDestination = productJSON.map((data) => {
          const object = {
            id: data.id,
            city: data.kota,
            country: data.negara,
            image: data.image,
          };
          return object;
        });
        resolve(dataDestination);
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  GetByOther(other) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        where: {
          [Op.or]: [
            {
              kota: {
                [Op.like]: `%${other}%`,
              },
            },
            {
              negara: {
                [Op.like]: `%${other}%`,
              },
            },
          ],
        },
      }).then((res) => {
        const productJSON = res;
        const dataDestination = productJSON.map((data) => {
          const object = {
            id: data.id,
            city: data.kota,
            country: data.negara,
            image: data.image,
          };
          return object;
        });
        resolve(dataDestination);
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  AddData(data) {
    return new Promise((resolve, reject) => {
      this.table.create(data)
        .then((res) => {
          resolve('Add destination success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  UpdateData(data) {
    return new Promise((resolve, reject) => {
      this.table.update({
        kota: data.kota,
        negara: data.negara,
        image: data.image,
      }, {
        where: {
          id: data.id,
        },
      })
        .then((res) => {
          resolve('Update destination success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  DeleteData(id_del) {
    return new Promise((resolve, reject) => {
      this.table.destroy({
        where: {
          id: id_del,
        },
      })
        .then((res) => {
          resolve('Delete destination success');
        }).catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = new Destination();
