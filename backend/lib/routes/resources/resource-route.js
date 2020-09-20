const Resource = require('../../models/resource-schema.js')
const dbUtils = require('../../utilities/db-utils.js')
const ensureAuth = require('../../auth/ensure-auth.js')

async function resourceCreate (ctx, next) {
  const body = {
    title: ctx.request.body.title,
    kind: ctx.request.body.kind,
    url: ctx.request.body.url,
    description: ctx.request.body.description,
    category: ctx.request.body.category,
    date_created: Date.now(),
    date_updated: Date.now()
  }
  const resource = await dbUtils.makeNewDocument(Resource, body)

  if (resource) {
    ctx.response.body = {
      title: resource.title,
      kind: resource.kind,
      url: resource.url,
      description: resource.description,
      category: resource.category,
      date_created: resource.date_created.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      date_updated: resource.date_updated.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }

  await next()
}

async function resourceFilter (ctx, next) {
  const category = dbUtils.splitUrl(ctx.request.url)

  const response = await dbUtils.findOneDocument(Resource, {
    category: category
  })

  if (response) {
    ctx.response.body = response
  }

  await next()
}

async function resourceUpdate (ctx, next) {
  const data = ctx.request.body
  const payload = {
    date_updated: new Date()
  }

  if (data.title) {
    payload.title = data.title
  }
  if (data.kind) {
    payload.kind = data.kind
  }
  if (data.image) {
    payload.image = data.image
  }
  if (data.category) {
    payload.category = data.category
  }
  if (data.url) {
    payload.url = data.url
  }
  if (data.description) {
    payload.description = data.description
  }

  const blog = await dbUtils.updateDocument(Resource, data._id, payload)
  const updatedResource = await blog.save()

  ctx.response.body = {
    _id: updatedResource._id,
    title: updatedResource.title,
    content: updatedResource.kind,
    image: updatedResource.image,
    tag: updatedResource.url,
    category: updatedResource.category,
    description: updatedResource.description,
    date_created: updatedResource.date_created,
    date_updated: updatedResource.date_updated
  }

  await next()
}

async function resourceDelete (ctx) {
  const id = await dbUtils.splitUrl(ctx.request.url)
  const confirm = await dbUtils.deleteDocument(Resource, id)

  if (confirm) {
    ctx.response.body = {
      message: 'The resource has been deleted'
    }
  }
}
// TODO: readd ensureAuth to create
module.exports = router => {
  router.get('/:category', resourceFilter)
  router.post('/create', resourceCreate)
  router.patch('/update', ensureAuth, resourceUpdate)
  router.delete('/:id', ensureAuth, resourceDelete)
}
