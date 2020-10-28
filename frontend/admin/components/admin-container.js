import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import fetcher from '../../utils/fetcher.js'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/admin-container-css.js'
import { paper } from '../../css/paper-effect.js'

export default class AdminContainer extends ViewBase {
  static get styles () {
    return [taxonomy, placement, paper]
  }

  async firstUpdated () {
    store.tags = await fetcher({
      method: 'GET',
      path: '/tag'
    })
  }

  render () {
    return html`
      <section class=paper>
        <a href=/admin/blog-form>New Blog Item</a>
        <a href=/admin/resource-form>New Resource Item</a>
        <a href=/admin/quote-form>New Quote</a>
        <a href=/admin/edit-item>Edit Items</a>
      </section>
  `
  }
}

customElements.define('admin-container', AdminContainer)
