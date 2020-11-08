import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import { placement } from '../css/blog-item-css.js'
import { router } from '../../site/components/site-routes.js'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { paper } from '../../css/paper-effect.js'

export default class BlogItem extends ViewBase {
  static get properties () {
    return {
      location: {
        type: Object,
        attribute: false
      },
      title: { type: String },
      titleUrl: { type: String }
    }
  }

  static get styles () {
    return [colors, placement, taxonomy, paper]
  }

  constructor () {
    super()
    this.location = router.location
    this.titleUrl = ''
    this.title = ''
  }

  ISOtoLongDate (isoString, locale = 'en-GB') {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(isoString)
    const longDate = new Intl.DateTimeFormat(locale, options).format(date)
    return longDate
  }

  findBlog () {
    return store.blogList.find(item => {
      return item.title === this.title
    })
  }

  render () {
    this.titleUrl = this.location.params.title
    this.title = this.titleUrl.split('_').join(' ')

    const blogItem = this.findBlog()

    return html`
      <article class="${store.category} paper">
        <h4 class="${store.category}-header">
          ${blogItem.title}
        </h4>
        <p>
          <strong class="${store.category}-label">Created:</strong>
          <time datetime=${blogItem.date_updated}>
            ${this.ISOtoLongDate(blogItem.date_updated)}
          </time>
        </p>
        <p>
          <strong class="${store.category}-label">Updated:</strong>
          <time datetime=${blogItem.date_updated}>
            ${this.ISOtoLongDate(blogItem.date_updated)}
          </time>
        </p>
        ${blogItem.content.split('\n').map(
          item =>
            html`
              <p>${item}</p>
            `
        )}
        <div class="flex-container">
          <p class="tags">
            <strong class="${store.category}-label">Tags:</strong>
          </p>
          ${blogItem.tag.map(
            tag =>
              html`<a class=${store.category}-link href=/${tag}/blog>${tag}</a>`
          )}
        </div>
        <div class="flex-container">
          <p class="tags">
            <strong class="${store.category}-label">Categories:</strong>
          </p>
          ${blogItem.category.map(
            item =>
              html`<a class=${store.category}-link href=/${store.category}/blog>${item}</a>`
          )}
        </div>
      </article>
    `
  }
}

customElements.define('blog-item', BlogItem)
