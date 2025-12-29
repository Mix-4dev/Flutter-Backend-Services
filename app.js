const itemRouter = require('./routes/itemRoutes');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use('/', helmet());
app.use('/', bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use('/', morgan('dev'));
}
app.use('/api/v1/items', itemRouter);
module.exports = app;
