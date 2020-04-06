const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../../server');
const assert = chai.assert;
const request = chai.request(server).keepOpen();

describe('tag-routes', function() {
  const tag1 = {
    tag: 'javascript',
    category: 'code'
  };

  it('createTag should save a new tag to the database', async function(done) {
    const user = await request
      .post('/user/registration')
      .send(
        {
          login: 'user1@test.com',
          password: 'user1',
          displayName: 'user1'
        })
      .then(function(res) {
        return res.body;
      })
      .catch(function(err) {
        console.error('error: ', err);
      });

    if(user) {
      request
        .post('/tag/create')
        .set('Authorization', user.token)
        .send(tag1)
        .end(function(err, res) {
          console.log('res: ', res.body);
          const result = res.body.tag;
          assert.hasAnyKeys(result, ['_id']);
          done();
        });
    }
  });
});
