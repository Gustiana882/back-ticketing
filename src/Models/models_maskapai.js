const {
  DataTypes, where, Op, Sequelize,
} = require('sequelize');
const orm = require('../Config/dbConnec');

class Maskapai {
  constructor() {
    this.table = orm.define('maskapais', {
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
    }, {
      timestamps: false,
    });
    
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table.findAll({
        order: [['id', 'DESC']],
      })
        .then((res) => {
          const productJSON = res;
          const dataMaskapai = productJSON.map((data) => {
            const object = {
              id: data.id,
              image: data.image,
              maskapai: data.nameMaskapai,
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
        image: data.image,
        nameMaskapai: data.nameMaskapai,
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
          resolve('Add maskapai success');
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
      })
        .then((res) => {
          const productJSON = res;
          const dataMaskapai = productJSON.map((data) => {
            const object = {
              id: data.id,
              images: data.images,
              maskapai: data.nameMaskapai,
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
