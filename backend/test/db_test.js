const mongoose = require('mongoose');

const { dburi_test } = require('../config');
console.log('dburi_test: ', dburi_test);
mongoose.createConnection(dburi_test, { useNewUrlParser: true });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log(`Mongoose default connection open to ${dburi_test}`);
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose.connection;
