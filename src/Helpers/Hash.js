const bcrypt = require('bcrypt');
const saltrounds = 10;

async function hashPassword(password) {
	try {
		const salt = await bcrypt.genSalt(saltrounds);
		const hashed = await bcrypt.hash(password, salt);
		return hashed;
	} catch (error) {
		throw error;
	}
}

module.exports = hashPassword;
