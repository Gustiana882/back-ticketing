const server = require('./app');
const db = require('./src/Config/dbConnec');
const merge = require('./src/Models/db-merge');

const PORT = 8000;

const run = async () => {
  try {
    await db.authenticate();
    await merge();
    server.listen(PORT, () => {
      console.log(`Service running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
