import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { Router } from '@vaadin/router'
import { store } from '../../site/state/store.js'
import fetcher from '../../utils/fetcher.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { placement } from '../css/admin-blog-list-css.js'

export default class AdminQuoteList extends MobxLitElement {
  static get styles () {
    return [taxonomy, colors, placement]
  }

  ISOtoLongDate (isoString, locale = 'en-GB') {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(isoString)
    const longDate = new Intl.DateTimeFormat(locale, options).format(date)
    return longDate
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
    const response = await fetcher({
      method: 'DELETE',
      path: `/quote/${id}`
    })

    return html`
      <p>${response}</p>
    `
  }

  async editItem (e) {
    const title = e.target.value
    const titleUrl = title.split(' ').join('_')
    Router.go(`/admin/edit/${titleUrl}`)
  }

  render () {
    console.log('store.quotes: ', store.quotes)
    return html`
      <section>
        ${store.quotes.map(quote => {
          return html`
            <article>
              <blockquote>${quote.quote}</blockquote>
              ${this.citeReference(quote)}
            </article>
          `
        })}
      </section>
    `
  }
}

customElements.define('admin-quote-list', AdminQuoteList)
