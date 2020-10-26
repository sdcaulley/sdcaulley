const Quote = require('../../models/quote-schema.js')
const dbUtils = require('../../utilities/db-utils.js')
const ensureAuth = require('../../auth/ensure-auth.js')

async function quoteCreate (ctx, next) {
  const quote = await new Quote(ctx.request.body)

  if (quote) {
    ctx.response.body = {
      _id: quote._id,
      quote: quote.quote,
      author: quote.author,
      reference: quote.reference,
      category: quote.category
    }
  }

  await next()
}

async function quoteGet (ctx, next) {
  const quote = await dbUtils.findAllDocuments(Quote)

  if (quote) {
    ctx.response.body = quote
  }

  await next()
}

async function quoteUpdate (ctx, next) {
  const data = ctx.request.body
  const payload = {}

  if (data.quote) {
    payload.quote = data.quote
  }
  if (data.author) {
    payload.author = data.author
  }
  if (data.reference) {
    payload.reference = data.reference
  }
  if (data.category) {
    payload.category = data.category
  }

  const quote = await dbUtils.updateDocument(Quote, data._id, payload)
  const updatedQuote = await quote.save()

  ctx.response.body = {
    quote: {
      _id: updatedQuote._id,
      quote: updatedQuote.quote,
      author: updatedQuote.author,
      reference: updatedQuote.reference,
      category: updatedQuote.category
    }
  }

  await next()
}

async function quoteDelete (ctx) {
  const id = await dbUtils.splitUrl(ctx.request.url)
  const confirm = await dbUtils.deleteDocument(Quote, id)

  if (confirm) {
    ctx.response.body = {
      message: 'The quote has been deleted'
    }
  }
}
// TODO: reapply ensureAuth to create route
module.exports = router => {
  router.get('/', quoteGet)
  router.post('/create', quoteCreate)
  router.patch('/update', ensureAuth, quoteUpdate)
  router.delete('/:id', ensureAuth, quoteDelete)
}
