const jwt = require('jsonwebtoken');
const { sekrit } = require('../../config');

module.exports = {
  sign(user) {
    const payload = {
      id: user._id,
      displayName: user.displayName
    };
    return jwt.sign(payload, sekrit);
  },
  verify(token) {
    return jwt.verify(token, sekrit);
  }
};
