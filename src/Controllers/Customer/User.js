/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
const usersMethod = {};
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const usersModel = require('../../Models/User');
const response = require('../../Helpers/Response');
const uploads = require('../../Helpers/UploadCloud');
const hash = require('../../Helpers/Hash');
// const decode = require('../../Helpers/DecodeToken');

usersMethod.registerUser = async (req, res) => {
  try {
    const check = await usersModel.getEmail(req.body.email);
    const hashedPass = await hash(req.body.password);
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    };
    if (check.length > 0) {
      return response(res, 200, { msg: 'email already registered' });
    }
    const result = await usersModel.addUser(data);
    response(res, 200, result);
  } catch (error) {
    response(res, 400, error);
  }
};

usersMethod.updateProfile = async (req, res) => {
  try {
    let urlImage = 'https://res.cloudinary.com/calvin-cloud/image/upload/v1626501995/users/user_meodkb.png';
    if (req.file !== undefined) {
      urlImage = await uploads(req.file.path);
    }
    const object = await (req.body);
    const data = {
      image: urlImage || req.file.path,
      id: object.id,
      name: object.name,
      email: object.email,
      address: object.address,
      phone: object.phone,
      city: object.city,
      postcode: object.postcode,
    };
    const result = await usersModel.update(data);
    response(res, 200, result);
  } catch (error) {
    response(res, 400, error);
  }
};

usersMethod.getUserProfile = async (req, res) => {
  try {
    const result = await usersModel.getEmail(req.params.email);
    result
      ? response(res, 200, result)
      : response(res, 400, { msg: 'email not found' });
  } catch (error) {
    console.log(error);
    response(res, 400, { msg: 'email not found' });
  }
};

usersMethod.getUser = async (req, res) => {
  try {
    const result = await usersModel.getEmail(req.params.email);
    result
      ? response(res, 200, result)
      : response(res, 400, { msg: 'email not found' });
  } catch (error) {
    response(res, 400, { msg: 'email not found' });
  }
};

module.exports = usersMethod;
