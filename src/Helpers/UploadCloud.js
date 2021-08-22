const { uploader } = require('../Configs/cloudinary');

async function uploads(pathFile) {
  try {
    const result = await uploader.upload(pathFile, {
      folder: 'product',
      use_filename: true,
    });
    return result.url;
  } catch (error) {
    throw error;
  }
}

module.exports = uploads;
