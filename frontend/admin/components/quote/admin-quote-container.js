import { html } from 'lit-element'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-blog-container-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import './admin-quote-list.js'

export default class AdminQuoteContainer extends ViewBase {
  static get styles () {
    return [placement, taxonomy]
  }

  async firstUpdated () {
    store.quotes = await fetcher({
      method: 'GET',
      path: '/quote'
    })
  }

  render () {
    return html`
      <section>
        <admin-quote-list></admin-quote-list>
      </section>
    `
  }
}

customElements.define('admin-quote-container', AdminQuoteContainer)
