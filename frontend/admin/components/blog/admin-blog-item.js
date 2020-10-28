import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { ViewBase } from '../../../site/components/view-base.js'
import { store } from '../../../site/state/store.js'
import { router } from '../../../site/components/site-routes.js'
import fetcher from '../../../utils/fetcher.js'
import { placement } from '../../css/admin-blog-item-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { colors } from '../../../css/color.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminBlogItem extends ViewBase {
  static get styles () {
    return [colors, placement, taxonomy, paper]
  }

  static get properties () {
    return {
      location: {
        type: Object,
        attribute: false
      },
      title: { type: String },
      titleUrl: { type: String },
      body: { type: Object },
      category: { type: Array },
      newTags: { type: Array },
      newTag: { type: String }
    }
  }

  constructor () {
    super()
    this.location = router.location
    this.titleUrl = ''
    this.title = ''
    this.body = {}
    this.category = ['code', 'craft', 'culture']
    this.newTags = []
    this.newTag = ''
  }

  async formSubmit (e) {
    store.blogItem = await fetcher({
      method: 'PATCH',
      path: '/blog/update',
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.body
    })

    Router.go('/admin/blog-preview')
  }

  handleChange (e) {
    const name = e.target.name

    if (name === 'title' || name === 'content') {
      this.body[name] = e.target.value
    } else {
      const ele = e.target
      const values = ele.selectedOptions
      const tag = []

      for (let i = 0; i < values.length; i++) {
        tag.push(values[i].label)
      }

      this.body[name] = tag
    }
  }

  ISOtoLongDate (isoString, locale = 'en-GB') {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(isoString)
    const longDate = new Intl.DateTimeFormat(locale, options).format(date)
    return longDate
  }

  findBlog () {
    const blogItem = store.blogItems.find(item => {
      return item.title === this.title
    })

    return mobx.toJS(blogItem)
  }

  async updateTag (e) {
    this.newTag = e.target.value
  }

  async handleNewTag () {
    this.body.tag.push(this.newTag)
    this.newTags.push(this.newTag)
    this.newTag = ''
  }

  render () {
    this.titleUrl = this.location.params.title
    this.title = this.titleUrl.split('_').join(' ')

    const blogItem = this.findBlog()
    this.body._id = blogItem.id
    const tags = mobx.toJS(store.tags)

    return html`
      <form class="paper">
        <fieldset>
          <legend>Update Blog Item</legend>
          <section>
            <label for="title">Title:</label>
            <input
              type="text"
              name="title"
              placeholder=${blogItem.title}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="content">Content:</label>
            <textarea
              name="content"
              placeholder=${blogItem.content}
              @change=${this.handleChange}
            ></textarea>
          </section>
          <section>
            <label for="tags">Tags:</label>
            <select name="tag" @change=${this.handleChange} multiple>
              ${tags.map(tag => {
                if (blogItem.tag.includes(tag.tag)) {
                  return html`
                    <option value=${tag.tag} selected>${tag.tag}</option>
                  `
                } else {
                  return html`
                    <option value=${tag.tag}>${tag.tag}</option>
                  `
                }
              })}
            </select>
            <label for="newTag">New Tag(s):</label>
            <input type="text" name="newTag" @change=${this.updateTag} />
            <input type="button" @click=${this.handleNewTag} value="New Tag" />
            <ul>
              ${this.newTags.map(tag => {
                return html`
                  <li>${tag}</li>
                `
              })}
            </ul>
          </section>
          <section>
            <label for="category">Category:</label>
            <select name="category" @change=${this.handleChange} multiple>
              ${this.category.map(cat => {
                if (blogItem.category.includes(cat)) {
                  return html`
                    <option value=${cat} selected>${cat}</option>
                  `
                } else {
                  return html`
                    <option value=${cat}>${cat}</option>
                  `
                }
              })}
            </select>
          </section>
          <section>
            <input type="button" @click=${this.formSubmit} value="Submit" />
            <input type="reset" value="Reset" />
          </section>
        </fieldset>
      </form>
    `
  }
}

customElements.define('admin-blog-item', AdminBlogItem)
