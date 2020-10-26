import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { ViewBase } from '../../site/components/view-base.js'
import fetcher from '../../utils/fetcher.js'
import { store } from '../../site/state/store.js'
import { placement } from '../css/admin-blog-form-css.js'
import { taxonomy } from '../../css/taxonomy.js'

export default class AdminBlogForm extends ViewBase {
  static get styles () {
    return [placement, taxonomy]
  }

  static get properties () {
    return {
      body: { type: Object },
      category: { type: Array },
      tags: { type: Array },
      newTags: { type: Array },
      newTag: { type: String }
    }
  }

  constructor () {
    super()
    this.body = {
      category: [],
      tag: []
    }
    this.category = ['code', 'craft', 'culture']
    this.tags = mobx.toJS(store.tags)
    this.newTags = []
    this.newTag = ''
  }

  async updateTag (e) {
    this.newTag = e.target.value
  }

  async handleNewTag () {
    this.body.tag.push(this.newTag)
    this.newTags.push(this.newTag)
    this.newTag = ''
  }

  async formSubmit (e) {
    store.blogItem = await fetcher({
      method: 'POST',
      path: '/blog/create',
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.body
    })

    Router.go('/admin/blog-preview')
  }

  handleChange (e) {
    const name = e.target.name

    if (name === 'category' || name === 'tag') {
      const ele = e.target
      const values = ele.selectedOptions

      for (let i = 0; i < values.length; i++) {
        this.body[name].push(values[i].label)
      }
    } else {
      this.body[name] = e.target.value
    }
  }

  render () {
    return html`
      <form>
        <fieldset>
          <legend>New Blog Entry</legend>
          <section>
            <label for="title">Title:</label>
            <input type="text" name="title" @change=${this.handleChange} />
          </section>
          <section>
            <label for="content">Content:</label>
            <textarea name="content" @change=${this.handleChange}></textarea>
          </section>
          <section>
            <label for="tag">Tags:</label>
            <select name="tag" @change=${this.handleChange} multiple>
              ${this.tags.map(tag => {
                return html`
                  <option value=${tag.tag}>${tag.tag}</option>
                `
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
                return html`
                  <option value=${cat}>${cat}</option>
                `
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

customElements.define('admin-blog-form', AdminBlogForm)
