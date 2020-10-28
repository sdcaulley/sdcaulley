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

export default class AdminQuoteItem extends ViewBase {
  static get styles () {
    return [colors, placement, taxonomy, paper]
  }

  static get properties () {
    return {
      location: {
        type: Object,
        attribute: false
      },
      category: { type: Array },
      body: { type: Object },
      id: { type: String }
    }
  }

  constructor () {
    super()
    this.location = router.location
    this.category = ['code', 'craft', 'culture']
    this.id = ''
    this.body = {}
  }

  async formSubmit (e) {
    store.quote = await fetcher({
      method: 'PATCH',
      path: '/quote/update',
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

  findQuote () {
    const quoteItem = store.quotes.find(item => {
      return item._id === this.id
    })

    return mobx.toJS(quoteItem)
  }

  render () {
    this.id = this.location.params.id
    const quoteItem = this.findQuote()
    this.body._id = quoteItem._id

    return html`
      <form class="paper">
        <fieldset>
          <legend>Update Quote:</legend>
          <section>
            <label for="quote">Quote:</label>
            <textarea
              name="quote"
              placeholder=${quoteItem.quote}
              @change=${this.handleChange}
            >
            </textarea>
          </section>
          <section>
            <label for="author">Author:</label>
            <input
              type="text"
              name="author"
              placeholder=${quoteItem.author}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="reference">Reference:</label>
            <input
              type="text"
              name="reference"
              placeholder=${quoteItem.reference}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="category">Category:</label>
            <select name="category" @change=${this.handleChange} multiple>
              ${this.category.map(category => {
                if (quoteItem.category.includes(category)) {
                  return html`
                    <option value=${category} selected>${category}</option>
                  `
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

customElements.define('admin-quote-item', AdminQuoteItem)
