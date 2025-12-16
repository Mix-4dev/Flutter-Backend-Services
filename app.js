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

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to flutter app',
  });
});

module.exports = app;
