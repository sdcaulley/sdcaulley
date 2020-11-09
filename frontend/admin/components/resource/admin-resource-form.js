import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-form-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminResourceForm extends ViewBase {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  static get properties () {
    return {
      body: { type: Object },
      category: { type: Array }
    }
  }

  constructor () {
    super()
    this.body = {
      category: []
    }
    this.resourceItem = mobx.toJS(store.resourceItem)
  }

  async formSubmit (e) {
    if (store.formState === 'new') {
      store.resourceItem = await fetcher({
        method: 'POST',
        path: '/resource/create',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      })
    } else {
      store.resourceItem = await fetcher({
        method: 'PATCH',
        path: '/resource/update',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      })
    }

    Router.go('/admin/resource-preview')
  }

  handleChange (e) {
    const name = e.target.name

    if (name === 'category') {
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
          <legend>${store.formState} Resource</legend>
          <section>
            <label for="title">Title:</label>
            <input
              type="text"
              name="title"
              placeholder=${this.resourceItem.title}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="kind">Kind:</label>
            <input
              type="text"
              name="kind"
              placeholder=${this.resourceItem.kind}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="url">URL:</label>
            <input
              type="url"
              name="url"
              placeholder=${this.resourceItem.url}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="description">Description:</label>
            <textarea
              name="description"
              placeholder=${this.resourceItem.description}
              @change=${this.handleChange}
            ></textarea>
          </section>
          <section>
            <label for="category">Category:</label>
            <select name="category" @change=${this.handleChange} multiple>
              ${store.categoryList.map(category => {
                if (store.formState === 'Edit') {
                  this.body._id = this.resourceItem._id
                  if (this.resourceItem.category.includes(category)) {
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

customElements.define('admin-resource-form', AdminResourceForm)
