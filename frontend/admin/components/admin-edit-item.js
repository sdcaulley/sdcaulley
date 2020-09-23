import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/admin-container-css.js'

export default class AdminEditItem extends ViewBase {
  static get styles () {
    return [taxonomy, placement]
  }

  render () {
    return html`
      <section>
        <a href=/admin/blog-list>Blog List</a>
        <a href=/admin/resource-list>Resource List</a>
        <a href=/admin/quote-form>Quote List</a>
      </section>
  `
  }
}

customElements.define('admin-edit-item', AdminEditItem)
