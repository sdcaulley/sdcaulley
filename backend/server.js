const app = require('./lib/app');
const connectDB = require('./lib/db/db');
const { port, dburi } = require('./config');

connectDB(dburi)
  .then(info =>
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`))
  .catch(err => console.error('Unable to connect to database: ', err));

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
}).on('error', err => {
  console.error(err);
});

module.exports = server;
