const app = require('./lib/app');
const http = require('http');
const PORT = process.env.PORT || 4000;
require('./lib/db');

const server = http.createServer(app);

module.exports = server.listen(PORT, () => {
    console.log('server is running on ', server.address());
});
