const jwt = require('jsonwebtoken');
const response = require('../Helpers/Response');

const checkToken = (role) => (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    response(res, 400, { msg: 'please login first' });
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
    if (err) {
      response(res, 400, err);
    }
    if (decode.role === role) {
      next();
    } else {
      response(res, 400, { msg: 'Unauthorized' });
    }
  });
};

module.exports = checkToken;
