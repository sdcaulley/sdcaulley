import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { store } from '../../../site/state/store.js'
import fetcher from '../../../utils/fetcher.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { placement } from '../../css/admin-blog-list-css.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminBlogList extends MobxLitElement {
  static get styles () {
    return [placement, taxonomy, paper]
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

  async findBlog (id) {
    const blogItem = store.blogList.find(item => {
      return item.id === id
    })

    return mobx.toJS(blogItem)
  }

  async editItem (e) {
    store.blogItem = await this.findBlog(e.target.value)
    Router.go('/admin/blog-form')
  }

  render () {
    if (store.blogList.length === 0) {
      return html`
        <p>No blog items yet.</p>
      `
    }

    return html`
      <h4>Blog List</h4>
      <section>
        ${store.blogList.map(blog => {
          return html`
            <article class="paper">
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
                value=${blog.id}
                @click=${this.editItem}
              >
                Edit
              </button>
              <button
                type="button"
                name="delete"
                value=${blog.id}
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
