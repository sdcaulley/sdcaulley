import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { placement } from '../css/resource-list-css.js'
import { paper } from '../../css/paper-effect.js'

export default class ResourceList extends MobxLitElement {
  static get styles () {
    return [colors, placement, taxonomy, paper]
  }

  render () {
    if (store.resources.length === 0) {
      return html`
        <p>No items yet.</p>
      `
    }

    return html`
      <section>
        ${store.resources.map(item => {
          return html`
            <article class=""${store.category} paper">
              <h4>
                <a class="${store.category}-header" href=${item.url}
                  >${item.title}
                </a>
              </h4>
              <p>${item.description}</p>
              <p>Type:</p>
              <p>${item.kind}</p>
            </article>
          `
        })}
      </section>
    `
  }
}

customElements.define('resource-list', ResourceList)
