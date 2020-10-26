const Blog = require('../../models/blog-schema.js')
const Tag = require('../../models/tag-schema.js')
const dbUtils = require('../../utilities/db-utils.js')
const ensureAuth = require('../../auth/ensure-auth.js')

async function tagsForBlog (tags) {
  const tagArray = await tags.map(async tag => {
    const response = await dbUtils.findOneDocument(Tag, { tag: tag })
    if (response.length === 0) {
      const newTag = await new Tag({ tag: tag })
      newTag.save()
      return newTag._id
    } else {
      return response[0]._id
    }
  })

  return Promise.all(tagArray)
}

async function blogCreate (ctx, next) {
  const tags = await tagsForBlog(ctx.request.body.tag)

  const body = {
    title: ctx.request.body.title,
    content: ctx.request.body.content,
    image: ctx.request.body.image,
    tag: tags,
    category: ctx.request.body.category,
    date_created: Date.now(),
    date_updated: Date.now()
  }

  const blog = await new Blog(body)
  blog.save()

  const response = {
    title: blog.title,
    content: blog.content,
    image: blog.image,
    tag: ctx.request.body.tag,
    category: blog.category,
    date_created: blog.date_created,
    date_updated: blog.date_updated
  }

  if (blog) {
    ctx.response.body = response
  }
  await next()
}

async function blogGetAll (ctx, next) {
  const blog = await dbUtils.findAllDocuments(Blog)

  const response = await Promise.all(
    blog.map(async item => {
      const tags = await Promise.all(
        item.tag.map(async tag => {
          const tagName = await dbUtils.findOneDocument(Tag, tag)
          return tagName[0].tag
        })
      )

      const body = {
        id: item._id,
        title: item.title,
        content: item.content,
        image: item.image,
        tag: tags,
        category: item.category,
        date_created: item.date_created,
        date_updated: item.date_updated
      }

      return body
    })
  )

  if (response) {
    ctx.response.body = response
  }

  await next()
}

async function blogFilter (ctx, next) {
  const category = dbUtils.splitUrl(ctx.request.url)
  let blog

  if (category === 'code' || category === 'craft' || category === 'culture') {
    blog = await dbUtils.findOneDocument(Blog, { category: category })
  } else {
    console.log('category: ', category)
    const tagId = await dbUtils.findOneDocument(Tag, { tag: category })
    blog = await dbUtils.findOneDocument(Blog, { tag: tagId[0]._id })
  }

  const response = await Promise.all(
    blog.map(async item => {
      const tags = await Promise.all(
        item.tag.map(async tag => {
          const tagName = await dbUtils.findOneDocument(Tag, tag)
          return tagName[0].tag
        })
      )
      const body = {
        id: item._id,
        title: item.title,
        content: item.content,
        image: item.image,
        tag: tags,
        category: item.category,
        date_created: item.date_created,
        date_updated: item.date_updated
      }

      return body
    })
  )

  if (response) {
    ctx.response.body = response
  }

  await next()
}

async function blogUpdate (ctx, next) {
  const data = ctx.request.body
  const payload = {
    date_updated: Date.now()
  }

  if (data.title) {
    payload.title = data.title
  }
  if (data.content) {
    payload.content = data.content
  }
  if (data.image) {
    payload.image = data.image
  }
  if (data.tag) {
    payload.tag = await tagsForBlog(data.tag)
  }
  if (data.category) {
    payload.category = data.category
  }

  const blog = await dbUtils.updateDocument(Blog, data._id, payload)
  const updatedBlog = await blog.save()
  const tags = await Promise.all(
    updatedBlog.tag.map(async tag => {
      const tagName = await dbUtils.findOneDocument(Tag, tag)
      return tagName[0].tag
    })
  )

  ctx.response.body = {
    _id: updatedBlog._id,
    title: updatedBlog.title,
    content: updatedBlog.content,
    image: updatedBlog.image,
    tag: tags,
    category: updatedBlog.category,
    date_created: updatedBlog.date_created,
    date_updated: updatedBlog.date_updated
  }

  await next()
}

async function blogDelete (ctx) {
  const id = await dbUtils.splitUrl(ctx.request.url)
  const confirm = await dbUtils.deleteDocument(Blog, id)

  if (confirm) {
    ctx.response.body = {
      message: 'The quote has been deleted'
    }
  }
}

module.exports = router => {
  router.get('/', blogGetAll)
  router.get('/:category', blogFilter)
  router.post('/create', blogCreate) // TODO: replace ensureAuth
  router.patch('/update', blogUpdate)
  router.delete('/:id', blogDelete)
}
