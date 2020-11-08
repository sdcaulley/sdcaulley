import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import fetcher from '../../utils/fetcher.js'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/admin-container-css.js'
import { paper } from '../../css/paper-effect.js'

export default class AdminCreate extends ViewBase {
  static get styles () {
    return [taxonomy, placement, paper]
  }

  constructor () {
    super()
    store.formState = 'New'
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
        <h4>Create Items</h4>
        <a href=/admin/blog-form>New Blog Item</a>
        <a href=/admin/resource-form>New Resource Item</a>
        <a href=/admin/quote-form>New Quote</a>
      </section>
  `
  }
}

customElements.define('admin-create', AdminCreate)
