const server = require('./app');
const db = require('./src/Config/dbConnec')

const PORT = 8000;

const run = async () => {
  try {
    await db.authenticate()
    server.listen(PORT, () => {
      console.log(`Service running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();