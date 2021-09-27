const time = {};
const model = require('../../Models/models_time');
const respone = require('../../Helpers/StandarRespon');

time.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

time.addData = async (req, res) => {
  try {
    const object = await (req.body);
    const data = {
      berangkat: object.berangkat,
      tiba: object.tiba,
      transit: object.transit,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

time.updateData = async (req, res) => {
  try {
    const object = await (req.body);
    const data = {
      id: object.id,
      berangkat: object.berangkat,
      tiba: object.tiba,
      transit: object.transit,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

time.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_time);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = time;
