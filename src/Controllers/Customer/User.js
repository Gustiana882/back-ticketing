const usersMethod = {};
const usersModel = require('../../Models/User');
const response = require('../../Helpers/Response');
const uploads = require('../../Helpers/UploadCloud');
const hash = require('../../Helpers/Hash');

usersMethod.registerUser = async (req, res) => {
  try {
    const check = await usersModel.getEmail(req.body.email);
    const hashedPass = await hash(req.body.password);
    const defaultImage =
      'https://res.cloudinary.com/calvin-cloud/image/upload/v1626501995/users/user_meodkb.png';
    const data = {
      image: defaultImage,
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    };
    if (check.length > 0) {
      return response(res, 200, { msg: 'email already registered' });
    }
    const result = await usersModel.addUser(data);
    console.log(data);
    response(res, 200, result);
  } catch (error) {
    response(res, 400, error);
  }
};

usersMethod.updateProfile = async (req, res) => {
  try {
    let defaultImage =
      'https://res.cloudinary.com/calvin-cloud/image/upload/v1626501995/users/user_meodkb.png';
    if (req.file !== undefined) {
      urlImage = await uploads(req.file.path);
    }
    const object = await req.body;
    const data = {
      image: urlImage || defaultImage,
      id: object.id,
      name: object.name,
      email: object.email,
      address: object.address,
      phone: object.phone,
      city: object.city,
      postcode: object.postcode,
    };
    const result = await usersModel.update(data);
    console.log(result);
    response(res, 200, result);
  } catch (error) {
    console.log(error);
    response(res, 400, error);
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
