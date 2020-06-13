const Tag = require('../../models/tag-schema');
const dbUtils = require('../../utilities/db-utils');
const ensureAuth = require('../../auth/ensure-auth');

async function tagCreate(ctx, next) {
  const tag = await dbUtils.makeNewDocument(Tag, ctx.request.body);

  if (tag) {
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

async function tagGet(ctx, next) {
  const tag = await dbUtils.findAllDocuments(Tag);

  if (tag) {
    ctx.response.body = { tag };
  }

  await next();
}

async function tagUpdate(ctx, next) {
  const data = ctx.request.body;
  const payload = {};

  if (data.tag) {
    payload.tag = data.tag;
  }
  if (data.category) {
    payload.category = data.category;
  }

  const tag = await dbUtils.updateDocument(Tag, data._id, payload);

  const updatedTag = await tag.save();

  ctx.response.body = {
    tag: {
      _id: updatedTag._id,
      tag: updatedTag.tag,
      category: updatedTag.category
    }
  };

  await next();
}

async function tagDelete(ctx) {
  const id = await dbUtils.splitUrl(ctx.request.url);
  const confirm = await dbUtils.deleteDocument(Tag, id);

  if (confirm) {
    ctx.response.body = {
      message: 'The tag has been deleted.'
    };
  }
}

module.exports = router => {
  router.get('/', ensureAuth, tagGet);
  router.post('/create', ensureAuth, tagCreate);
  router.patch('/update', ensureAuth, tagUpdate);
  router.delete('/:id', ensureAuth, tagDelete);
};
