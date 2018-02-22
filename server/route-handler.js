const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// Mock data for testing purposes only
const data = require('./../db/data/mock-data');

app = express();


// TODO: Remove domain names
// Check why issuer does not work

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://fdash4.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http://localhost:4201',
  // issuer: 'https://fdash4.auth0.com',
  algorithms: ['RS256']
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Uncomment the jwtCheck middleware to enable authentication across whole application
app.use(jwtCheck);

app.get('/api/recipes', (req, res, next) => {
  res.send(data.module);
});

app.get('/api/recipe/:id', (req, res, next) => {
  res.send('Here be one recipe');
});

app.post('/api/upload', (req, res, next) => {
  res.send('Upload request received');
});

module.exports = app;
