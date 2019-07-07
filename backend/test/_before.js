require('./db_test');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');
const request = chai.request(app).keepOpen();

before((done) => {
    mongoose.connection.dropDatabase(() => {
        done();
    });
});

after((done) => {
    request.close(done);
});

exports.badRequest = (url, data, error) => {
    request
        .post(url)
        .send(data)
        .then(
            () => { throw new Error('Status should not be OK'); },
            res => {
                assert.equal(res.status, 400);
                assert.equal(res.response.body.error, error);
            }
        )
        .catch(function(err) {
            console.log('err ', err);
        });
};

exports.saveItem = (route, item) => {
    const url = `'/${ route }'`;
    request
        .post(url)
        .send(item)
        .then(res => {
            console.log('res.body(saveItem): ', res.body);
            return res.body;
        })
        .catch(function(err) {
            console.log('err ', err);
        });
};
