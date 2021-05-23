const http = require('http');
const app = require('./app');

const server = http.createServer(app);

require('./database');

server
  .listen(3000)
  .on('listening', () => console.log('Server is running on port 3000'))
  .on('error', (err) => {
    console.log(err);
  });
