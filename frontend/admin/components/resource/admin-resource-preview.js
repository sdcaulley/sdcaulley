import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../../../site/state/store.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { placement } from '../../css/resource-preview-css.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminResourcePreview extends MobxLitElement {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  render () {
    return html`
      <article class="paper">
        <h4>
          <a href=${store.resource.url}>${store.resource.title}</a>
        </h4>
        <p>${store.resource.description}</p>
        <p class="type">Type:</p>
        <p class="type">${store.resource.kind}</p>
      </article>
    `
  }
}

customElements.define('admin-resource-preview', AdminResourcePreview)
