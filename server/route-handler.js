const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const data = require('./../db/data/mock-data');

app = express();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://fdash4.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http://localhost:4201',
  issuer: 'https://fdash4.auth0.com',
  algorithms: ['RS256']
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
// Uncomment the jwtCheck middleware to enable authentication
// app.use(jwtCheck);

app.get('/api/recipes', (req, res, next) => {
  console.log('Testing get');
  res.send(data.module);
});

app.get('/api/recipe/:id', (req, res, next) => {
  res.send('Here be one recipe');
});

module.exports = app;
