const dotenv = require('dotenv');
const server = require('./server/route-handler.js');

dotenv.config();

const SERVER = process.env.SERVER || 'http://127.0.0.1';
const PORT = process.env.PORT || 4201;

server.listen(PORT);
console.log(`Server is listening at ${SERVER}:${PORT}`);
