import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { placement } from '../css/blog-list-css.js'
import { paper } from '../../css/paper-effect.js'

export default class BlogList extends MobxLitElement {
  static get styles () {
    return [colors, placement, taxonomy, paper]
  }

  teaser (item) {
    const array = item.split('.')
    return html`
      <p>${array[0]}. ${array[1]}.</p>
    `
  }

  ISOtoLongDate (isoString, locale = 'en-GB') {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(isoString)
    const longDate = new Intl.DateTimeFormat(locale, options).format(date)
    return longDate
  }

  render () {
    if (store.blogItems.length === 0) {
      return html`
        <p>No blog items yet.</p>
      `
    }

    return html`
      <section>
        ${store.blogItems.map(blog => {
          const title = blog.title.split(' ').join('_')
          const titleHref = `/${store.category}/blog/${title}`
          return html`
            <article class="${store.category} paper">
              <h4>
                <a class="${store.category}-header" href=${titleHref}>
                  ${blog.title}
                </a>
              </h4>
              <p>
                <strong class="${store.category}-label">Updated:</strong>
                <time datetime=${blog.date_updated}>
                  ${this.ISOtoLongDate(blog.date_updated)}
                </time>
              </p>
              ${this.teaser(blog.content)}
              <p class="tags">
                <strong class="${store.category}-label">Tags:</strong>
              </p>
              ${blog.tag.map(
                tag =>
                  html`<a class='tags ${store.category}-link' href=/${tag}/blog>${tag}</a>`
              )}
            </article>
          `
        })}
      </section>
    `
  }
}

customElements.define('blog-list', BlogList)
