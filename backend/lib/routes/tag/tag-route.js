const Tag = require('../../models/tag-schema.js')
const dbUtils = require('../../utilities/db-utils.js')

async function tagGet (ctx, next) {
  const tag = await dbUtils.findAllDocuments(Tag)

  if (tag) {
    ctx.response.body = tag
  }

  await next()
}

module.exports = router => {
  router.get('/', tagGet)
}
