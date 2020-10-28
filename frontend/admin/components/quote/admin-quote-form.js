import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-blog-form-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminQuoteForm extends ViewBase {
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
    store.quote = await fetcher({
      method: 'POST',
      path: '/quote/create',
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.body
    })

    Router.go('/admin/quote-preview')
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
          <legend>New Quote:</legend>
          <section>
            <label for="quote">Quote:</label>
            <textarea name="quote" @change=${this.handleChange}></textarea>
          </section>
          <section>
            <label for="author">Author:</label>
            <input type="text" name="author" @change=${this.handleChange} />
          </section>
          <section>
            <label for="reference">Reference:</label>
            <input type="text" name="reference" @change=${this.handleChange} />
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

customElements.define('admin-quote-form', AdminQuoteForm)
