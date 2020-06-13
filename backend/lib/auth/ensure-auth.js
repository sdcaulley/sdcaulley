const token = require('./token');

async function ensureAuth(ctx, next) {
  console.log('ctx: ', ctx);
  const bearerToken = ctx.header.token;

  return next(token.verify(bearerToken));
}

module.exports = ensureAuth;
