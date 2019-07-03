const helper = require('./helpers');

describe('user', () => {
    before(() => {
        const users = [
            {
                name: 'user1',
                email: 'user1@test.com',
                password: 'user123',
                password_confirm: 'user123'
            },
            {
                name: 'user2',
                email: 'user2@test.com',
                password: 'user231',
                password_confirm: 'user231'
            },
            {
                name: 'user3',
                email: 'user3@test.com',
                password: 'user312',
                password_confirm: 'user312'
            }
        ];

        users.forEach(user => {
            helper.saveItem('/register', user);
        });
    });

    describe('user management', () => {
        it('email should not be in use', () => {
            helper.badRequest('/register', { email: 'user1@test.com' }, 'Email is already in use');
        });
    });
});
