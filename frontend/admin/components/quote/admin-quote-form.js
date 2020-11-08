import { html } from 'lit-element'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-form-css.js'
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
    this.body = {
      category: []
    }
    this.quoteItem = mobx.toJS(store.quoteItem)
  }

  async formSubmit (e) {
    if (store.formState === 'New') {
      store.quoteItem = await fetcher({
        method: 'POST',
        path: '/quote/create',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      })
    } else {
      store.quoteItem = await fetcher({
        method: 'PATCH',
        path: '/quote/update',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      })
    }

    Router.go('/admin/quote-preview')
  }

  handleChange (e) {
    const name = e.target.name

    if (name === 'category') {
      const ele = e.target
      const values = ele.selectedOptions

      for (let i = 0; i < values.length; i++) {
        this.body.category.push(values[i].label)
      }
    } else {
      this.body[name] = e.target.value
    }
  }

  render () {
    return html`
      <form class="paper">
        <fieldset>
          <legend>${store.formState} Quote:</legend>
          <section>
            <label for="quote">Quote:</label>
            <textarea
              name="quote"
              placeholder=${this.quoteItem.quote}
              @change=${this.handleChange}
            ></textarea>
          </section>
          <section>
            <label for="author">Author:</label>
            <input
              type="text"
              name="author"
              placeholder=${this.quoteItem.author}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="reference">Reference:</label>
            <input
              type="text"
              name="reference"
              placeholder=${this.quoteItem.reference}
              @change=${this.handleChange}
            />
          </section>
          <section>
            <label for="category">Category:</label>
            <select name="category" @change=${this.handleChange} multiple>
              ${store.categoryList.map(category => {
                if (store.formState === 'Edit') {
                  this.body._id = this.quoteItem._id
                  if (this.quoteItem.category.includes(category)) {
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

customElements.define('admin-quote-form', AdminQuoteForm)
