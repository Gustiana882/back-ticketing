const { config, uploader } = require('cloudinary').v2;

const cloudConfig = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUD_NAME,
<<<<<<< HEAD
    api_key: process.env.CLOUD_KEYS,
    api_secret: process.env.CLOUD_SECRETS,
=======
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
  });
  next();
};

module.exports = { cloudConfig, uploader };
