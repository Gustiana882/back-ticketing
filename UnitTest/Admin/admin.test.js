/* eslint-disable no-undef */

require('dotenv/config');
const request = require('supertest');
const app = require('../../app');
const sequelize = require('../../src/Config/dbConnec');

// const standartRespone = {
//   status: expect.any(Number),
//   description: expect.any(String),
//   result: expect.any(Array),
// };

const createDataBase = async () => {
  await sequelize.sync({ alter: true });
};

beforeAll(async () => {
  await createDataBase();
}, 30000);

describe('service admin destination', () => {
  test('get all destination should return status code 200', async () => {
    const respone = await request(app).get('/admin/destination/all');
    expect(respone.status).toBe(200);
  });

  test('add destination should return status code 201', async () => {
    const respone = await request(app)
      .post('/admin/destination/add')
      .send({
        kota: 'Medan',
        negara: 'Indonesia',
        image:
          'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png',
      });
    expect(respone.status).toBe(201);
  });

  test('update destination should return status code 201', async () => {
    const respone = await request(app)
      .put('/admin/destination/update')
      .send({
        id: 1,
        kota: 'Medan',
        negara: 'Indonesia',
        image:
          'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png',
      });
    expect(respone.status).toBe(201);
  });
});

describe('service admin maskapai', () => {
  test('get all maskapai should return status code 200', async () => {
    const respone = await request(app).get('/admin/maskapai/all');
    expect(respone.status).toBe(200);
  });

  test('add maskapai should return status code 201', async () => {
    const respone = await request(app).post('/admin/maskapai/add').send({
      nameMaskapai: 'Garuda Indonesia',
      image:
        'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png',
    });
    expect(respone.status).toBe(201);
  });

  test('update maskapai should return status code 201', async () => {
    const respone = await request(app)
      .put('/admin/maskapai/update')
      .send({
        id: 1,
        nameMaskapai: 'Garuda Indonesia',
        image:
          'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png',
      });
    expect(respone.status).toBe(201);
  });
});

describe('service admin time', () => {
  test('get all time should return status code 200', async () => {
    const respone = await request(app).get('/admin/time/all');
    expect(respone.status).toBe(200);
  });

  test('add time should return status code 201', async () => {
    const respone = await request(app).post('/admin/time/add').send({
      berangkat: '10.00',
      tiba: '10.00',
      transit: '2',
    });
    expect(respone.status).toBe(201);
  });

  test('update time should return status code 201', async () => {
    const respone = await request(app).put('/admin/time/update').send({
      id: 1,
      berangkat: '10.00',
      tiba: '10.00',
      transit: '2',
    });
    expect(respone.status).toBe(201);
  });
});

describe('service admin price', () => {
  test('add price should return status code 200', async () => {
    const respone = await request(app).post('/admin/price').send({
      id_Maskapai: 1,
      dewasa: 3000,
      anak: 2000,
      class_type: 'Economy',
    });
    expect(respone.status).toBe(200);
  });

  test('get price by id should return status code 200', async () => {
    const respone = await request(app).get('/admin/price?id=1');
    expect(respone.status).toBe(200);
  });

  test('get price by class should return status code 200', async () => {
    const respone = await request(app).get('/admin/price_class?class_type=Economy');
    expect(respone.status).toBe(200);
  });

  test('update price should return status code 200', async () => {
    const respone = await request(app).put('/admin/price').send({
      id: 1,
      id_Maskapai: 1,
      dewasa: 3000,
      anak: 2000,
      class_type: 'Economy',
    });
    expect(respone.status).toBe(200);
  });
});

describe('service admin schedule', () => {
  test('get all schedule should return status code 200', async () => {
    const respone = await request(app).get('/admin/schedule/all');
    expect(respone.status).toBe(200);
  });

  test('add schedule should return status code 201', async () => {
    const respone = await request(app).post('/admin/schedule/add').send({
      codenegara: 'INA',
      idMaskapai: 1,
      tujuan_awal: 1,
      tujuan_akhir: 1,
      time: 1,
      kursi: 60,
      harga: 1,
    });
    expect(respone.status).toBe(201);
  });

  test('update schedule should return status code 201', async () => {
    const respone = await request(app).put('/admin/schedule/update').send({
      id: 1,
      idMaskapai: 1,
      tujuan_awal: 1,
      tujuan_akhir: 1,
      time: 1,
      kursi: 60,
      harga: 1,
    });
    expect(respone.status).toBe(201);
  });
});

// describe('service admin booking', () => {
//   test('add booking should return status code 200', async () => {
//     const respone = await request(app).post('/booking').send({
//       idSchedule: 1,
//       namePerson: 'nama',
//       emailPerson: 'email person',
//       phonePerson: 'phone',
//       namePassenger: 'namapass',
//       nationality: 'nationality',
//       totalPrice: 123,
//       insurance: true,
//       statusPaymen: false,
//     },{
//       header: {
//         token :
//       }
//     });
//     expect(respone.status).toBe(200);
//   });

//   test('get all booking should return status code 200', async () => {
//     const respone = await request(app).get('/admin/booking/all');
//     expect(respone.status).toBe(200);
//   });

//   test('get status payment should return status code 200', async () => {
//     const respone = await request(app).get('/admin/booking/status-payment/status');
//     expect(respone.status).toBe(200);
//   });

//   test('get history booking should return status code 200', async () => {
//     const respone = await request(app).get('/admin/booking/history');
//     expect(respone.status).toBe(200);
//   });
// });

describe('delete service', () => {
  test('delete destination should return status code 200', async () => {
    const respone = await request(app).delete('/admin/destination/del/1');
    expect(respone.status).toBe(200);
  });

  test('delete schedule should return status code 200', async () => {
    const respone = await request(app).delete('/admin/schedule/del/1');
    expect(respone.status).toBe(200);
  });

  test('delete maskapai should return status code 200', async () => {
    const respone = await request(app).delete('/admin/maskapai/del/1');
    expect(respone.status).toBe(200);
  });

  test('delete time should return status code 200', async () => {
    const respone = await request(app).delete('/admin/time/del/1');
    expect(respone.status).toBe(200);
  });
});
