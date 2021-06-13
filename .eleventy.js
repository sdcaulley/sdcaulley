const fs = require('fs')
const dev = (global.dev = process.env.ELEVENTY_ENV === 'development')
const now = new Date()

module.exports = config => {
  /* --- Collections --- */
  // post collection (in src/articles)
  config.addCollection('code', collection =>
    collection
      .getFilteredByGlob('./src/code/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))
  )

  config.addCollection('craft', collection =>
    collection
      .getFilteredByGlob('./src/craft/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))
  )

  config.addCollection('culture', collection =>
    collection
      .getFilteredByGlob('./src/culture/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))
  )

  /* --- FILTERS --- */
  // format dates
  const dateformat = require('./lib/filters/dateformat')
  config.addFilter('datefriendly', dateformat.friendly)
  config.addFilter('dateymd', dateformat.ymd)

  /* --- PLUGINS --- */
  // navigation
  config.addPlugin(require('@11ty/eleventy-navigation'))

  /* --- SHORTCODES --- */
  // page navigation
  config.addShortcode('navlist', require('./lib/shortcodes/navlist.js'))
  config.addShortcode('tagCloud', require('./lib/shortcodes/tag-cloud.js'))

  /* --- STATIC FILES --- */
  config.addPassthroughCopy('./src/images/')
  config.addPassthroughCopy('./src/css/')
  config.addWatchTarget('./src/css/')

  config.setDataDeepMerge(true)

  /* --- 404 REDIRECT --- */
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('build/404.html')
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      }
    }
  })

  /* --- DEFAULTS --- */
  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  }
}
