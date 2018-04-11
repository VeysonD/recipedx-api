import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import multer from 'multer';

// Mock data for testing purposes only
import data from './../db/data/mock-data';

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

// Check why issuer does not work

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUDIENCE,
  // issuer: 'https://fdash4.auth0.com',
  algorithms: ['RS256']
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Uncomment the jwtCheck middleware to enable authentication across whole application
app.use(jwtCheck);

app.get('/api/recipes', (req, res, next) => {
  res.send(data);
});

app.get('/api/recipe/:id', (req, res, next) => {
  res.send('Here be one recipe');
});

app.get('/api/search', (req, res, next) => {
  console.log('What is the req: ', req.query);

  //TODO: Send only recipes that are searched for
  res.send(data);
});

app.post('/api/upload', upload.array('photos', 4), (req, res, next) => {
  console.log('What is the upload request: ', req);
  res.send(['Here lies a recipe']);
});

module.exports = app;
