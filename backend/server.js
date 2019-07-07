const app = require('./lib/app');
const http = require('http');
require('./lib/db');
const { port } = require('./config');
const server = http.createServer(app);

module.exports = server.listen(port, () => {
    console.log('server is running on ', server.address());
});
