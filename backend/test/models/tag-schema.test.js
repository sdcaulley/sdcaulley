const Tag = require('../../lib/models/tag-schema');
const testInvalid = require('./test_invalid')(Tag);

describe('tag schema', () => {
    it('requires tag', () => {
        return testInvalid({
            category: 'code'
        });
    });
});
