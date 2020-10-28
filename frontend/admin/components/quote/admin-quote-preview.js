import { html } from 'lit-element'
import { ViewBase } from '../../../site/components/view-base.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-quote-preview-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminQuotePreview extends ViewBase {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  citeReference () {
    if (store.quote.reference) {
      return html`
        <p>
          From <cite>${store.quote.reference}</cite> by ${store.quote.author}
        </p>
      `
    } else {
      return html`
        <p>${store.quote.author}</p>
      `
    }
  }

  render () {
    return html`
      <section class="paper">
        <blockquote>${store.quote.quote}</blockquote>
        ${this.citeReference()}
      </section>
    `
  }
}

customElements.define('admin-quote-preview', AdminQuotePreview)
