/* eslint-disable no-unused-expressions */
const NullValidation = (data) => {
  !((data === null
        || data === undefined
        || data === false
        || data === ''
        || data === 'null'
        || data === 'undefined'
        || data === 'false'
  ));
};

module.exports = NullValidation;
