const priceMethod = {};
const priceModel = require('../Models/price');
const response = require('../Helpers/Response');

priceMethod.getPriceById = async (req, res) => {
  try {
    const result = await priceModel.getId(req.query.id);
    return response(res, 200, result);
  } catch (error) {
    return response(res, 400, error);
  }
};

priceMethod.getPriceByIdMaskapai = async (req, res) => {
  try {
    const result = await priceModel.getId(req.body.idMaskapai);
    return response(res, 200, result);
  } catch (error) {
    return response(res, 400, error);
  }
};

priceMethod.getPriceByClass = async (req, res) => {
  try {
    const result = await priceModel.getClass(req.query.class_type);
    return response(res, 200, result);
  } catch (error) {
    return response(res, 400, error);
  }
};

priceMethod.addPriceMaskapai = async (req, res) => {
  try {
    const data = {
      id_Maskapai: req.body.id_Maskapai,
      dewasa: req.body.dewasa,
      anak: req.body.anak,
      class_type: req.body.class_type,
    };
    const result = await priceModel.addPrice(data);
    return response(res, 200, result);
  } catch (error) {
    return response(res, 400, error);
  }
};

priceMethod.updatePriceById = async (req, res) => {
  try {
    const data = {
      id_Maskapai: req.body.id_Maskapai,
      dewasa: req.body.dewasa,
      anak: req.body.anak,
      class_type: req.body.class_type,
      id: req.body.id,
    };
    const result = await priceModel.updatePrice(data);
    return response(res, 200, result);
  } catch (error) {
    return response(res, 400, error);
  }
};

module.exports = priceMethod;
