const Blog = require('../../lib/models/blog-schema');
const testInvalid = require('./test_invalid')(Blog);

describe('blog schema', () => {
    it('requires title', () => {
        return testInvalid({
            content: 'test content',
            tag: 'test',
            category: 'code'
        });
    });
    it('requires content', () => {
        return testInvalid({
            title: 'test title',
            tag: 'test',
            category: 'code'
        });
    });
    it('requires tag', () => {
        return testInvalid({
            title: 'test title',
            content: 'test content',
            category: 'code'
        });
    });
    it('requires category', () => {
        return testInvalid({
            title: 'test title',
            content: 'test content',
            tag: 'test',
        });
    });
});
