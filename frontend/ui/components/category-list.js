import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import { store } from '../../site/state/store.js'
import { placement } from '../css/category-css.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { paper } from '../../css/paper-effect.js'

class CategoryList extends ViewBase {
  static get styles () {
    return [super.styles, colors, placement, taxonomy, paper]
  }

  static get properties () {
    return {
      categories: { type: Array }
    }
  }

  constructor () {
    super()
    store.location = 'home'
  }

  render () {
    return html`
      <section>
        ${store.categoryList.map(
          category =>
            html`<a class="${category}-link paper" href=/${category}/blog id=${category}><strong>${category}</strong></a>`
        )}
      </section>
    `
  }
}

customElements.define('category-list', CategoryList)
