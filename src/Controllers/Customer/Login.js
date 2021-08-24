/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
/* eslint-disable consistent-return */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginMethod = {};
const usersModel = require('../../Models/User');
const response = require('../../Helpers/Response');

<<<<<<< HEAD
const token = async (email, role) => {
=======
const tokenAuth = async (email) => {
>>>>>>> 902bcbd8fbfaf6aeccaef684c84216cdbd60a155
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
<<<<<<< HEAD
    // console.log(check);
    if (check) {
      const result = await token(req.body.email, passDB[0].roles);
=======
    if (check) {
      const result = await tokenAuth(req.body.email);
>>>>>>> 902bcbd8fbfaf6aeccaef684c84216cdbd60a155
      return response(res, 200, result);
    }
    return response(res, 200, { msg: 'wrong password or email' });
  } catch (error) {
    response(res, 500, { msg: 'wrong password or email' });
  }
};

module.exports = loginMethod;
