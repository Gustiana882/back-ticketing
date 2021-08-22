const {
  DataTypes, where, Op, Sequelize,
} = require('sequelize');
const orm = require('../Config/dbConnec');
const price = require('./price');

class Maskapai {
  constructor() {
    this.table = orm.define('maskapai', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameMaskapai: {
        type: DataTypes.STRING,
        allowNull: false,
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
          model: 'price',
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
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
        include: [{
          model: price.table,
          as: 'harga',
        }],
      })
        .then((res) => {
          const productJSON = res;
          const dataMaskapai = productJSON.map((data) => {
            const object = {
              id: data.id,
              images: data.images,
              maskapai: data.nameMaskapai,
              chairsAmount: data.kursi,
              price: data.harga,
            };
            return object;
          });
          resolve(dataMaskapai);
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
          resolve('Delete maskapai success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  UpdateData(data) {
    return new Promise((resolve, reject) => {
      this.table.update({
        images: data.images,
        nameMaskapai: data.nameMaskapai,
        kursi: data.kursi,
        harga: data.harga,
      }, {
        where: {
          id: data.id,
        },
      })
        .then((res) => {
          resolve('Update maskapai success');
        }).catch((err) => {
          reject(err.message);
        });
    });
  }

  AddData(data) {
    return new Promise((resolve, reject) => {
      this.table.create(data)
        .then((res) => {
          resolve('Add product success');
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
          model: price.table,
          as: 'harga',
        }],
      })
        .then((res) => {
          const productJSON = res;
          const dataMaskapai = productJSON.map((data) => {
            const object = {
              id: data.id,
              images: data.images,
              maskapai: data.nameMaskapai,
              chairsAmount: data.kursi,
              price: data.harga,
            };
            return object;
          });
          resolve(dataMaskapai);
        }).catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new Maskapai();
