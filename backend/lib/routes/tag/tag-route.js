const Tag = require('../../models/tag-schema');
const dbUtils = require('../../utilities/db-utils');
const ensureAuth = require('../../auth/ensure-auth');

async function tagCreate(ctx, next) {
  console.log('tagCreate: ', ctx);
  const tag = await dbUtils.makeNewDocument(Tag, ctx.requst.body);

  if(tag) {
    ctx.response.body = {
      tag: {
        _id: tag._id,
        tag: tag.tag,
        category: tag.category
      }
    };
  }

  await next();
}

module.exports = (router) => {
  // router.get();
  router.post('/create', ensureAuth, tagCreate);
  // router.patch();
  // router.delete();
};
