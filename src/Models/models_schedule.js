/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const {
  DataTypes,
} = require('sequelize');
const orm = require('../Config/dbConnec');
const destination = require('./models_destination');
const time = require('./models_time');
const maskapai = require('./models_maskapai');
const price = require('./price');

class Schedule {
  constructor() {
    this.table = orm.define('schedules', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idMaskapai: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'maskapais',
          key: 'id',
        },
      },
      kursi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'prices',
          key: 'id',
        },
      },
      tujuan_awal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'destinations',
          key: 'id',
        },
      },
      tujuan_akhir: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'destinations',
          key: 'id',
        },
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'times',
          key: 'id',
        },
      },
    }, {
      timestamps: false,
    });
    this.table.belongsTo(price.table, {
      foreignKey: 'harga',
      as: 'price',
    });
    this.table.belongsTo(destination.table, {
      foreignKey: 'tujuan_awal',
      as: 'tujuanAwal',
    });
    this.table.belongsTo(destination.table, {
      foreignKey: 'tujuan_akhir',
      as: 'tujuanAkhir',
    });
    this.table.belongsTo(maskapai.table, {
      foreignKey: 'idMaskapai',
      as: 'Maskapai',
    });
    this.table.belongsTo(time.table, {
      foreignKey: 'time',
      as: 'times',
    });
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        include: [{
          model: destination.table,
          as: 'tujuanAwal',
        }, {
          model: destination.table,
          as: 'tujuanAkhir',
        }, {
          model: maskapai.table,
          as: 'Maskapai',
        }, {
          model: time.table,
          as: 'times',
        }, {
          model: price.table,
          as: 'price',
        }],
      })
        .then((res) => {
          const productJSON = res;
          const dataSchedule = productJSON.map((data) => {
            const object = {
              id: data.id,
              code: data.code,
              idMaskapai: data.Maskapai,
              from: data.tujuanAwal,
              to: data.tujuanAkhir,
              time: data.times,
              chairsAmount: data.kursi,
              price: data.price,
            };
            return object;
          });
          resolve(dataSchedule);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  FindTicket(from, to, clas) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        attributes: {
          exclude: ['tujuan_awal', 'tujuan_akhir', 'harga', 'time', 'idMaskapai'],
        },
        include: [{
          model: destination.table,
          as: 'tujuanAwal',
          where: {
            negara: from,
          },
        }, {
          model: destination.table,
          as: 'tujuanAkhir',
          where: {
            negara: to,
          },
        }, {
          model: maskapai.table,
          as: 'Maskapai',
        }, {
          model: time.table,
          as: 'times',
        }, {
          model: price.table,
          as: 'price',
          where: {
            class_type: clas,
          },
        }],
      })
        .then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  FindTicketTo(city) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        include: [{
          model: destination.table,
          as: 'tujuanAwal',
        }, {
          model: destination.table,
          as: 'tujuanAkhir',
          where: {
            kota: city,
          },
        }, {
          model: maskapai.table,
          as: 'Maskapai',
        }, {
          model: time.table,
          as: 'times',
        }, {
          model: price.table,
          as: 'price',
        }],
      })
        .then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  FindTicketFrom(city) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        include: [{
          model: destination.table,
          as: 'tujuanAwal',
          where: {
            kota: city,
          },
        }, {
          model: destination.table,
          as: 'tujuanAkhir',
        }, {
          model: maskapai.table,
          as: 'Maskapai',
        }, {
          model: time.table,
          as: 'times',
        }, {
          model: price.table,
          as: 'price',
        }],
      })
        .then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  FindTicketMaskapai(nama_maskapai) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        include: [{
          model: destination.table,
          as: 'tujuanAwal',
        }, {
          model: destination.table,
          as: 'tujuanAkhir',
        }, {
          model: maskapai.table,
          as: 'Maskapai',
          where: {
            nameMaskapai: nama_maskapai,
          },
        }, {
          model: time.table,
          as: 'times',
        }, {
          model: price.table,
          as: 'price',
        }],
      })
        .then((res) => {
          resolve(res);
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
          resolve('Delete schedule success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  UpdateData(data) {
    return new Promise((resolve, reject) => {
      this.table.update({
        idMaskapai: data.idMaskapai,
        from: data.tujuan_awal,
        to: data.tujuan_akhir,
        time: data.time,
        kursi: data.kursi,
        harga: data.harga,
      }, {
        where: {
          id: data.id,
        },
      })
        .then((res) => {
          resolve('Update schedule success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  AddData(data) {
    return new Promise((resolve, reject) => {
      this.table.create(data)
        .then((res) => {
          resolve('Add schedule success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  GetbyID(id) {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        where: {
          id,
        },
        attributes: {
          exclude: ['tujuan_awal', 'tujuan_akhir', 'harga', 'time', 'idMaskapai'],
        },
        include: [{
          model: destination.table,
          as: 'tujuanAwal',
        }, {
          model: destination.table,
          as: 'tujuanAkhir',
        }, {
          model: maskapai.table,
          as: 'Maskapai',
        }, {
          model: time.table,
          as: 'times',
        }, {
          model: price.table,
          as: 'price',
        }],
      })
        .then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new Schedule();
