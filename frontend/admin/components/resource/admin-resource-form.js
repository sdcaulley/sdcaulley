import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-resource-form-css.js'
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
    this.body = {}
    this.category = ['code', 'craft', 'culture']
  }

  async formSubmit (e) {
    store.resource = await fetcher({
      method: 'POST',
      path: '/resource/create',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: this.body
    })

    Router.go('/admin/resource-preview')
  }

  handleChange (e) {
    const name = e.target.name

    if (name === 'category') {
      const ele = e.target
      const values = ele.selectedOptions
      const tag = []

      for (let i = 0; i < values.length; i++) {
        tag.push(values[i].label)
      }

      this.body[name] = tag
    } else {
      this.body[name] = e.target.value
    }
  }

  render () {
    return html`
      <form class="paper">
        <fieldset>
          <section>
            <label for="title">Title:</label>
            <input type="text" name="title" @change=${this.handleChange} />
          </section>
          <section>
            <label for="kind">Kind:</label>
            <input type="text" name="kind" @change=${this.handleChange} />
          </section>
          <section>
            <label for="url">URL:</label>
            <input type="url" name="url" @change=${this.handleChange} />
          </section>
          <section>
            <label for="description">Description:</label>
            <textarea
              name="description"
              @change=${this.handleChange}
            ></textarea>
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

customElements.define('admin-resource-form', AdminResourceForm)
