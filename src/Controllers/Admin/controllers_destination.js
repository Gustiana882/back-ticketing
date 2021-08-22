const destination = {};
const model = require('../../Models/models_destination');
const uploads = require('../../Helpers/UploadCloud');
const respone = require('../../Helpers/StandarRespon');

destination.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

destination.addData = async (req, res) => {
  try {
    let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png';
    if (req.file !== undefined) {
      urlImage = await uploads(req.file.path);
    }
    const object = await (req.body);
    const data = {
      kota: object.kota,
      negara: object.negara,
      image: urlImage || req.file.path,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

destination.updateData = async (req, res) => {
  try {
    let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png';
    if (req.file !== undefined) {
      urlImage = await uploads(req.file.path);
    }
    const object = await (req.body);
    const data = {
      id: object.id,
      kota: object.kota,
      negara: object.negara,
      image: urlImage || req.file.path,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

destination.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_destination);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = destination;
