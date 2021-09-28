/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * @index
 *
 *  - service register customer
 *  - service register seller
 *  - service login customer
 *  - service login seller
 */

require('dotenv/config');
const requests = require('supertest');
const app = require('../app');
const sequelize = require('../src/Config/dbConnec');

let tokenSeller;
let tokenCustomer;
const formRegisterCustomer = {
  name: 'test',
  email: 'emailTest@gmail.com',
  password: 'test1234',
};

const standarResponse = {
  status: expect.any(Number),
  description: expect.any(String),
  isError: expect.any(Boolean),
  // message: expect.any(String),
  result: expect.any(Array),
};

const createDataBase = async () => {
  await sequelize.sync({ alter: true });
};

beforeAll(async () => {
  await createDataBase();
}, 30000);

describe('service register customer', () => {
  // test('should return register success', async () => {
  //   const result = await requests(app).post('/register').send({
  //     name: formRegisterCustomer.name,
  //     email: formRegisterCustomer.email,
  //     password: formRegisterCustomer.password,
  //   });
  //   expect(result.body.result[0].msg).toEqual(expect.stringContaining('register success'));
  //   expect(result.statusCode).toBe(200);
  // }, 30000);

  test('should return register gagal e-mail already registered', async () => {
    const result = await requests(app).post('/register').send({
      name: formRegisterCustomer.name,
      email: formRegisterCustomer.email,
      password: formRegisterCustomer.password,
    });
    expect(result.statusCode).toBe(200);
    expect(result.body.result[0].msg).toEqual(expect.stringContaining('email already registered'));
  }, 30000);
});

const formLoginCustomer = {
  email: 'emailTest@gmail.com',
  password: 'test1234',
};

describe('service login customer', () => {
  test('should return token jwt', async () => {
    const result = await requests(app).post('/login').send({
      email: formLoginCustomer.email,
      password: formLoginCustomer.password,
    });
    tokenCustomer = result.body.result[0].token_key;
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(expect.objectContaining(standarResponse));
    expect(result.body.result[0].msg).toEqual(expect.stringContaining('Login Success'));
    expect(result.body.result[0].token).toEqual(expect.stringContaining('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
  }, 30000);
});

const standarCustomerProfile = {
  id: expect.any(Number),
  code: expect.any(String),
  image: expect.any(String),
  maskapai: expect.any(String),
  from: expect.any(String),
  to: expect.any(String),
  time: {
    depature: expect.any(String),
    arrived: expect.any(String),
    transit: expect.any(String),
  },
  price: {
    class: expect.any(String),
  },
};
