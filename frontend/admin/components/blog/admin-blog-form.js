import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-blog-form-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminBlogForm extends ViewBase {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  static get properties () {
    return {
      body: { type: Object },
      tags: { type: Array },
      newTags: { type: Array },
      newTag: { type: String }
    }
  }

  constructor () {
    super()
    this.body = {
      tag: [],
      category: []
    }
    this.tags = mobx.toJS(store.tags)
    this.newTags = []
    this.newTag = ''
    this.blogItem = mobx.toJS(store.blogItem)
  }

  ISOtoLongDate (isoString, locale = 'en-GB') {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(isoString)
    const longDate = new Intl.DateTimeFormat(locale, options).format(date)
    return longDate
  }

  async updateTag (e) {
    this.newTag = e.target.value
  }

  async handleNewTag () {
    this.tag.push(this.newTag)
    this.newTags.push(this.newTag)
    this.newTag = ''
  }

  async formSubmit (e) {
    if (store.formState === 'new') {
      store.blogItem = await fetcher({
        method: 'POST',
        path: '/blog/create',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      })
    } else {
      store.blogItem = await fetcher({
        method: 'PATCH',
        path: '/blog/update',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      })
    }

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
      <form class="paper">
        <fieldset>
          <legend>${store.formState} Blog Entry</legend>
          <section>
            <label for="title">Title:</label>
            <input
              type="text"
              name="title"
              placeholder=${this.blogItem.title}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="content">Content:</label>
            <textarea
              name="content"
              plcaceholder=${this.blogItem.content}
              @change=${this.handleChange}
            ></textarea>
          </section>
          <section>
            <label for="tags">Tags:</label>
            <select name="tag" @change=${this.handleChange} multiple>
              ${this.tags.map(tag => {
                if (store.formState === 'Edit') {
                  this.body._id = this.blogItem.id
                  if (this.blogItem.tag.includes(tag.tag)) {
                    this.body.tag.push(tag.tag)
                    return html`
                      <option value=${tag.tag} selected>${tag.tag}</option>
                    `
                  } else {
                    return html`
                      <option value=${tag.tag}>${tag.tag}</option>
                    `
                  }
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
              ${store.categoryList.map(category => {
                if (store.formState === 'Edit') {
                  if (this.blogItem.category.includes(category)) {
                    this.body.category.push(category)
                    return html`
                      <option value=${category} selected>${category}</option>
                    `
                  } else {
                    return html`
                      <option value=${category}>${category}</option>
                    `
                  }
                } else {
                  return html`
                    <option value=${category}>${category}</option>
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

customElements.define('admin-blog-form', AdminBlogForm)
