/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const decodeToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
    if (err) {
      reject(err);
    } else {
      resolve(decode);
    }
  });
});

module.exports = decodeToken;