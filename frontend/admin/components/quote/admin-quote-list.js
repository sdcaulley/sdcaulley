import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { store } from '../../../site/state/store.js'
import fetcher from '../../../utils/fetcher.js'
import { placement } from '../../css/admin-list-css.js'
import { paper } from '../../../css/paper-effect.js'
import { taxonomy } from '../../../css/taxonomy.js'

export default class AdminQuoteList extends MobxLitElement {
  static get styles () {
    return [placement, paper, taxonomy]
  }

  citeReference (quote) {
    if (quote.reference) {
      return html`
        <p>From <cite>${quote.reference}</cite> by ${quote.author}</p>
      `
    } else {
      return html`
        <p>${quote.author}</p>
      `
    }
  }

  async deleteItem (e) {
    const id = e.target.value
    store.deleteResponse = await fetcher({
      method: 'DELETE',
      path: `/quote/${id}`
    })

    Router.go('/admin/blog-preview')
  }

  async findQuote (id) {
    const quoteItem = store.quoteList.find(item => {
      return item._id === id
    })

    return mobx.toJS(quoteItem)
  }

  async editItem (e) {
    store.quoteItem = await this.findQuote(e.target.value)
    Router.go('/admin/quote-form')
  }

  render () {
    return html`
      <section>
        <h4>Quote List</h4>
        ${store.quoteList.map(quote => {
          return html`
            <article class="paper">
              <blockquote>${quote.quote}</blockquote>
              ${this.citeReference(quote)}
              <button
                type="button"
                name="edit"
                value=${quote._id}
                @click=${this.editItem}
              >
                Edit
              </button>
              <button
                type="button"
                name="delete"
                value=${quote._id}
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

customElements.define('admin-quote-list', AdminQuoteList)
