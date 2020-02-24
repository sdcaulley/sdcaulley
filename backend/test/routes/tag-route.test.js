const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../../server');
const assert = chai.assert;
const request = chai.request(server).keepOpen();

describe('tag-routes', () => {
  const tag1 = {
    tag: 'javascript',
    category: 'code'
  };

  const tag2 = {
    tag: 'new testament',
    category: 'consciousness'
  };

  const tag3 = {
    tag: 'crochet',
    category: 'craft'
  };

  const tag4 = {
    tag: 'broken',
    category: 'fish'
  };

  it('createTag should save a new tag to the database', (done) => {
    request
      .post('/tag/create')
      .send(tag1)
      .end((err, res) => {
        const result = res.body.tag;
        assert.hasAnyKeys(result, ['_id']);
        done();
      });
  });
});
