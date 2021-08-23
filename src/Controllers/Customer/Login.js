/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginMethod = {};
const usersModel = require('../../Models/User');
const response = require('../../Helpers/Response');

const token = async (email, role) => {
  try {
    const payload = {
      user: email,
      role: role || 'customer',
    };
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });
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
    // console.log(check);
    if (check) {
      const result = await token(req.body.email, passDB[0].roles);
      return response(res, 200, result);
    }
    return response(res, 200, { msg: 'wrong password or email' });
  } catch (error) {
    console.log(error);
    response(res, 500, { msg: 'wrong password or email' });
  }
};

module.exports = loginMethod;
