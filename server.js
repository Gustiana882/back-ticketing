const server = require('./app');
const db = require('./src/Config/dbConnec');
<<<<<<< HEAD

=======
>>>>>>> 68dd718e6b5f64ae2ee29cab6670dab01599222f
const PORT = 8000;
const orm = require('./src/Config/dbConnec');

const run = async () => {
<<<<<<< HEAD
  try {
    await db.authenticate();
    await db.sync({alter : true})
    server.listen(PORT, () => {
      console.log(`Service running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
=======
	try {
		await db.authenticate();
		await orm.sync({ alter: true });
		server.listen(PORT, () => {
			console.log(`Service running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
>>>>>>> 68dd718e6b5f64ae2ee29cab6670dab01599222f
};

run();
