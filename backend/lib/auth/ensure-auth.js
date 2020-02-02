const token = require('./token');

async function ensureAuth(ctx, next) {
  const bearerToken = ctx.header.authorization;

  return next(token.verify(bearerToken));
}

module.exports = ensureAuth;
