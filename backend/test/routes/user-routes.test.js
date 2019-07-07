const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../_before');

before(() => {
    const users = [
        {
            name: 'user1',
            email: 'user1@test.com',
            password: 'user123',
            password_confirm: 'user123'
        }
    ];

    users.forEach(user => {
        return helper.saveItem('register',user);
    });
});

describe('user', () => {
    it('email should not be in use', () => {
        helper.badRequest('register', { email: 'user1@test.com' }, 'Email is already in use');
    });
});
