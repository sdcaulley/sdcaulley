import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { Router } from '@vaadin/router'
import { store } from '../../site/state/store.js'
import fetcher from '../../utils/fetcher.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { placement } from '../css/admin-blog-list-css.js'

export default class AdminBlogList extends MobxLitElement {
  static get styles () {
    return [colors, placement, taxonomy]
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

  async deleteItem (e) {
    const id = e.target.value
    const response = await fetcher({
      method: 'DELETE',
      path: `/blog/${id}`
    })

    return html`
      <p>${response}</p>
    `
  }

  async editItem (e) {
    const title = e.target.value
    const titleUrl = title.split(' ').join('_')
    Router.go(`/admin/edit/${titleUrl}`)
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
          return html`
            <article>
              <h4>
                <a>${blog.title}</a>
              </h4>
              <p>
                <strong>Updated:</strong>
                <time datetime=${blog.date_updated}>
                  ${this.ISOtoLongDate(blog.date_updated)}
                </time>
              </p>
              ${this.teaser(blog.content)}
              <p class="tags">
                <strong>Tags:</strong>
              </p>
              ${blog.tag.map(
                tag =>
                  html`
                    <p class="tags">${tag}</p>
                  `
              )}
              <button
                type="button"
                name="edit"
                value=${blog.title}
                @click=${this.editItem}
              >
                Edit
              </button>
              <button
                type="button"
                name="delete"
                value=${blog._id}
                @click=${this.deleteItem}
              >
                Delete
              </button>
            </article>
          `
        })}
      </section>
    `
  }
}

customElements.define('admin-blog-list', AdminBlogList)
