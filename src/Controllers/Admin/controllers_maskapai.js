const maskapai = {};
const model = require('../../Models/models_maskapai');
const uploads = require('../../Helpers/UploadCloud');
const respone = require('../../Helpers/StandarRespon');

maskapai.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

maskapai.addData = async (req, res) => {
  try {
    let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png';
    if (req.file !== undefined) {
      urlImage = await uploads(req.file.path);
    }
    const object = await (req.body);
    const data = {
      nameMaskapai: object.nameMaskapai,
      image: urlImage || req.file.path,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

maskapai.updateData = async (req, res) => {
  try {
    let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png';
    if (req.file !== undefined) {
      urlImage = await uploads(req.file.path);
    }
    const object = await (req.body);
    const data = {
      id: object.id,
      nameMaskapai: object.nameMaskapai,
      image: urlImage || req.file.path,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

maskapai.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_maskapai);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = maskapai;
