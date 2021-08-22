const server = require('./app');
const db = require('./src/Config/dbConnec');

const PORT = 8000;

const run = async () => {
  try {
    await db.authenticate();
    await db.sync({alter : true})
    server.listen(PORT, () => {
      console.log(`Service running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
