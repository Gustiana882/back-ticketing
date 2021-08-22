const server = require('./app');
const db = require('./src/Config/dbConnec');
const merge = require('./src/Models/db-merge');

const PORT = 8000;
const orm = require('./src/Config/dbConnec');

const run = async () => {
  try {
    await db.authenticate();
<<<<<<< HEAD
    await merge();
=======
    await db.sync({ alter: true });
>>>>>>> a4639ff33fafa895ab2fe814ba345cc7aa0f45a3
    server.listen(PORT, () => {
      console.log(`Service running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
