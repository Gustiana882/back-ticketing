const {config, uploader} = require("cloudinary").v2

const cloudConfig = (req, res, next) => {
    config({
        cloud_name : process.env.CLOUD_NAME,
        api_key : process.env.CLOUD_KEYS,
        api_secret : process.env.CLOUD_SECRETS
    })
    next()
}

module.exports = {cloudConfig,uploader}