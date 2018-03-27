const dotenv = require('dotenv');

dotenv.config();

const server = require('./server/route-handler.js');

const SERVER = process.env.SERVER || 'http://127.0.0.1';
const PORT = process.env.PORT || 4201;

server.listen(PORT);
console.log(`Server is listening at ${SERVER}:${PORT}`);
