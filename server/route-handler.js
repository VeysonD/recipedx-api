const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/api/recipes', (req, res, next) => {
  console.log('Testing get');
  res.send('Here be recipes');
});

app.get('/api/recipe/:id', (req, res, next) => {
  res.send('Here be one recipe');
});

module.exports = app;
