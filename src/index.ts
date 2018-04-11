import dotenv from 'dotenv';

dotenv.config();

const server = require('./server/route-handler.js');

const SERVER = process.env.SERVER;
const PORT = process.env.PORT;

server.listen(PORT, () => {
 console.log(`Server is listening at ${SERVER}:${PORT}`);
});
