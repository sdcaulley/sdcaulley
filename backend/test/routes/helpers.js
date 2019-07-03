const app = require('../../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app);

const assert = chai.assert;

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

exports.saveItem = (url, item) => {
    request
        .post(url)
        .send(item)
        .then(res => {
            return res.body;
        })
        .catch(function(err) {
            console.log('err ', err);
        });
};
