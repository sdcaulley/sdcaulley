process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/sdcaulley_test';
require('../lib/db');
const mongoose = require('mongoose');

before((done) => {
    const drop = () => mongoose.connection.dropDatabase(() =>{
        done();
    });
    if(mongoose.connection.readyState === 1) drop();
    else mongoose.connection.on( 'open', drop);
});
