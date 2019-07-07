const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const helper = require('../_before');

describe('tag', () => {
    it('saves a tag', () => {
        const tag = {
            tag: 'test 1',
            category: 'code'
        };

        helper.saveItem('tag', tag)
            .then(res => {
                console.log('res.body(tag): ', res.body);
                assert.isObject(res.body, 'tag is an object');
            });
    });
});
