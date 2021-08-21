function respon(res, status, result = '', err = false) {
  let desc = '';

  switch (status) {
    case 200:
      desc = 'OK';
      break;
    case 201:
      desc = 'Created';
      break;
    case 400:
      desc = 'Bad Request';
      break;
    case 401:
      desc = 'Unauthorized';
      break;
    case 500:
      desc = 'Internal Server Error';
      break;
    case 501:
      desc = 'Bad Gateway';
      break;
    case 304:
      desc = 'Not Modified';
      break;
    default:
      desc = '';
  }

  const isObject = (data) => !!data && data.constructor === Object;

  const isString = (data) => {
    if (typeof data === 'string') {
      return true;
    }
    return false;
  };

  const results = {};

  if (err == true) {
    results.status = status;
    results.description = desc;
    results.isError = true;
    results.result = isObject(result) ? [result] : Array.isArray(result) ? result : result;
  } else {
    results.status = status;
    results.description = desc;
    results.result = isObject(result) ? [result] : Array.isArray(result) ? result : result;
  }

  if (isString(result)) {
    results.result = { msg: result };
  }

  return res.status(status).json(results);
}

module.exports = respon;
