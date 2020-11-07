import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import { store } from '../../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/admin-container-css.js'
import { paper } from '../../css/paper-effect.js'

export default class AdminContainer extends ViewBase {
  static get styles () {
    return [taxonomy, placement, paper]
  }

  constructor () {
    super()
    store.location = 'Admin'
  }

  render () {
    return html`
      <section class=paper>
        <a href=/admin/create-item>Create Item</a>
        <a href=/admin/edit-item>Edit Items</a>
      </section>
  `
  }
}

customElements.define('admin-container', AdminContainer)
