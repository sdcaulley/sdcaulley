const Quote = require('../../lib/models/quote-schema');
const testInvalid = require('./test_invalid')(Quote);

describe('quote schema', () => {
    it('requires quote', () => {
        return testInvalid({
            author: 'Blog Author',
            reference: 'Online Blog'
        });
    });
    it('requires author', () => {
        return testInvalid({
            quote: 'All hell froze over',
            reference: 'Online Blog'
        });
    });
});
