const { uploader } = require('../Config/cloudinary');

async function uploads(pathFile) {
	try {
		const result = await uploader.upload(pathFile, {
			folder: 'fashion',
			use_filename: true,
		});
		console.log(result.url);
		return result.url;
	} catch (error) {
		throw error;
	}
}

async function uploadsUser(pathFile) {
	try {
		const result = await uploader.upload(pathFile, {
			folder: 'users',
			use_filename: true,
		});
		return result.url;
	} catch (error) {
		throw error;
	}
}

async function uploadsStore(pathFile) {
	try {
		const result = await uploader.upload(pathFile, {
			folder: 'store',
			use_filename: true,
		});
		return result.url;
	} catch (error) {
		throw error;
	}
}

module.exports = { uploads, uploadsUser, uploadsStore };
