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
      roles: {
        type: DataTypes.STRING,
        allowNullL: true,
      },
    });
  }

  update(data) {
    return new Promise((resolve, reject) => {
      const {
        image, name, email, phone, id, city, postcode, address,
      } = data;
      this.table
        .update(
          {
            image,
            name,
            email,
            phone,
            city,
            postcode,
            address,
          },
          {
            where: {
              email,
            },
          },
        )
        .then((res) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      const { name, email, password } = data;
      const roles = 'customer';
      this.table
        .create({
          name, email, password, roles,
        })
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
