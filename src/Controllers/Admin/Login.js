/* eslint-disable no-useless-catch */
/* eslint-disable consistent-return */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginMethod = {};
const usersModel = require('../../Models/User');
const response = require('../../Helpers/Response');

const tokenAuth = async (email) => {
  try {
    const payload = {
      user: email,
      role: 'admin',
    };
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });
    const result = {
      token,
      msg: 'Login Success',
      email,
    };
    return result;
  } catch (error) {
    throw error;
  }
};

loginMethod.login = async (req, res) => {
  try {
    const passDB = await usersModel.getEmail(req.body.email);
    const passUser = req.body.password;
    const check = await bcrypt.compare(passUser, passDB[0].password);
    if (check) {
      const result = await tokenAuth(req.body.email);
      return response(res, 200, result);
    }
  } catch (error) {
    response(res, 500, { msg: 'wrong password or email' });
  }
};

module.exports = loginMethod;
