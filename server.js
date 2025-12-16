const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((conn) => {
    // console.log(conn.connections);
    console.log('DB connection successfully');
  })
  .catch((err) => console.log(err.message));

// console.log(process.env);
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`APP is running on the following link: http://localhost:${PORT}`);
});
