const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbConnec');
const hash = require('../Helpers/Hash');

class Users {
  constructor() {
    this.table = sequelize.define('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
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
      city: {
        type: DataTypes.STRING,
        allowNullL: true,
      },
      postcode: {
        type: DataTypes.STRING,
        allowNullL: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNullL: true,
      },
    });
  }

  update(data) {
    return new Promise((resolve, reject) => {
      const {
        img, name, email, address, phone, city, postcode,
      } = data;
      this.table
        .update(
          {
            img, name, address, phone, city, postcode,
          },
          {
            where: {
              email,
            },
          },
        )
        .then((res) => {
          resolve({ msg: 'Profile updated' });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      const { name, email, password } = data;
      this.table
        .create({ name, email, password })
        .then((res) => {
          resolve({ msg: 'register success' });
        })
        .catch((err) => {
          reject(err);
        });
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

  getAll() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getEmail(email) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({ where: { email } })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = new Users();
