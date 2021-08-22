const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbConnec');

class Prices {
  constructor() {
    this.table = sequelize.define('prices', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_Maskapai: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dewasa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      anak: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      class_type: {
        type: DataTypes.STRING,
        allowNull: true,
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

  getId(id) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({ where: { id } })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getIdMaskapai(id_Maskapai) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({ where: { id_Maskapai } })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getClass(class_type) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({ where: { class_type } })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addPrice(data) {
    return new Promise((resolve, reject) => {
      const {
        id_Maskapai, dewasa, anak, class_type,
      } = data;
      this.table
        .create({
          id_Maskapai, dewasa, anak, class_type,
        })
        .then((res) => {
          console.log(data);
          resolve({ msg: 'add price success' });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updatePrice(data) {
    return new Promise((resolve, reject) => {
      const {
        id_Maskapai, id, dewasa, anak, class_type,
      } = data;
      this.table
        .update(
          { dewasa, anak, class_type },
          {
            where: { id },
          },
        )
        .then((res) => {
          console.log(data);
          resolve({ msg: 'update price success' });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = new Prices();
