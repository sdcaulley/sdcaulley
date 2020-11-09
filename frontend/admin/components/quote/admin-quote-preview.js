import { html } from 'lit-element'
import { ViewBase } from '../../../site/components/view-base.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-preview-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminQuotePreview extends ViewBase {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  citeReference () {
    if (store.quoteItem.reference) {
      return html`
        <p>
          From <cite>${store.quoteItem.reference}</cite> by
          ${store.quoteItem.author}
        </p>
      `
    } else {
      return html`
        <p>${store.quoteItem.author}</p>
      `
    }
  }

  render () {
    return html`
      <article class="paper">
        <blockquote>${store.quoteItem.quote}</blockquote>
        ${this.citeReference()}
      </article>
    `
  }
}

customElements.define('admin-quote-preview', AdminQuotePreview)
