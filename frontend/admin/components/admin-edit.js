import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import { store } from '../../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/admin-container-css.js'
import { paper } from '../../css/paper-effect.js'

export default class AdminEdit extends ViewBase {
  static get styles () {
    return [taxonomy, placement, paper]
  }

  constructor () {
    super()
    store.formState = 'Edit'
  }

  render () {
    return html`
      <section class=paper>
        <h4>Edit Items</h4>
        <a href=/admin/blog-list>Blog List</a>
        <a href=/admin/resource-list>Resource List</a>
        <a href=/admin/quote-list>Quote List</a>
      </section>
  `
  }
}

customElements.define('admin-edit', AdminEdit)
