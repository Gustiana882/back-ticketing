const {
  DataTypes, where, Op, Sequelize,
} = require('sequelize');
const orm = require('../Config/dbConnec');
const destination = require('./models_destination');
const time = require('./models_time');
const maskapai = require('./models_maskapai');

class Schedule {
  constructor() {
<<<<<<< HEAD
    this.table = orm.define('schedule', {
=======
    this.table = orm.define('schedules', {
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
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
<<<<<<< HEAD
          model: 'maskapai',
=======
          model: 'maskapais',
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
          key: 'id',
        },
      },
      tujuan_awal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
<<<<<<< HEAD
          model: 'destination',
=======
          model: 'destinations',
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
          key: 'id',
        },
      },
      tujuan_akhir: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
<<<<<<< HEAD
          model: 'destination',
=======
          model: 'destinations',
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
          key: 'id',
        },
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
<<<<<<< HEAD
          model: 'time',
=======
          model: 'times',
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
          key: 'id',
        },
      },
    }, {
      timestamps: false,
    });
    this.table.belongsTo(destination.table, {
      foreignKey: 'tujuan_awal',
<<<<<<< HEAD
      as: 'tujuan_awal',
    });
    this.table.belongsTo(destination.table, {
      foreignKey: 'tujuan_akhir',
      as: 'tujuan_akhir',
    });
    this.table.belongsTo(maskapai.table, {
      foreignKey: 'idMaskapai',
      as: 'idMaskapai',
    });
    this.table.belongsTo(time.table, {
      foreignKey: 'time',
      as: 'time',
=======
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
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
    });
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        include: [{
          model: destination.table,
          as: 'tujuan_awal',
        }, {
          model: destination.table,
          as: 'tujuan_akhir',
        }, {
          model: maskapai.table,
          as: 'idMaskapai',
        }, {
          model: time.table,
          as: 'time',
        }],
      })
        .then((res) => {
          const productJSON = res;
          const dataSchedule = productJSON.map((data) => {
            const object = {
              id: data.id,
              code: data.code,
              idMaskapai: data.idMaskapai,
              from: data.tujuan_awal,
              to: data.tujuan_akhir,
              time: data.time,
            };
            return object;
          });
          resolve(dataSchedule);
        }).catch((err) => {
          console.log(err);
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
        include: [{
          model: destination.table,
          as: 'tujuan_awal',
        }, {
          model: destination.table,
          as: 'tujuan_akhir',
        }, {
          model: maskapai.table,
          as: 'idMaskapai',
        }, {
          model: time.table,
          as: 'time',
        }],
      })
        .then((res) => {
          const productJSON = res;
          const dataSchedule = productJSON.map((data) => {
            const object = {
              id: data.id,
              code: data.code,
              idMaskapai: data.idMaskapai,
              from: data.tujuan_awal,
              to: data.tujuan_akhir,
              time: data.time,
            };
            return object;
          });
          resolve(dataSchedule);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new Schedule();
