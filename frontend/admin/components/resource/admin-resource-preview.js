import { html } from 'lit-element'
import { ViewBase } from '../../../site/components/view-base.js'
import { store } from '../../../site/state/store.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { placement } from '../../css/admin-preview-css.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminResourcePreview extends ViewBase {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  render () {
    if (store.deleteResponse) {
      return html`
        <article class="paper">
          <p>${store.deleteResponse.message}</p>
        </article>
      `
    }

    return html`
      <article class="paper">
        <h4>
          <a href=${store.resourceItem.url}>${store.resourceItem.title}</a>
        </h4>
        <p>${store.resourceItem.description}</p>
        <p class="type">Type:</p>
        <p class="type">${store.resourceItem.kind}</p>
      </article>
    `
  }
}

customElements.define('admin-resource-preview', AdminResourcePreview)
