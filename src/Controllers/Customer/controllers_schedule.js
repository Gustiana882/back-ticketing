const schedule = {};
const model = require('../../Models/models_schedule');
const respone = require('../../Helpers/StandarRespon');

schedule.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

schedule.getByID = async (req, res) => {
  try {
    const result = await model.GetbyID(req.params.id_schedule);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

schedule.findTicket = async (req, res) => {
  try {
    const result = await model.FindTicket(req.query.from, req.query.to, req.query.price);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

schedule.updateData = async (req, res) => {
  try {
    const object = await (req.body);
    const data = {
      idMaskapai: object.idMaskapai,
      tujuan_awal: object.tujuan_awal,
      tujuan_akhir: object.tujuan_akhir,
      kursi: object.kursi,
      harga: object.harga,
      time: object.time,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = schedule;
