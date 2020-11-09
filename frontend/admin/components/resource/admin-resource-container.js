import { html } from 'lit-element'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-container-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import './admin-resource-list.js'

export default class AdminResourceContainer extends ViewBase {
  static get styles () {
    return [placement, taxonomy]
  }

  async firstUpdated () {
    store.resourceList = await fetcher({
      method: 'GET',
      path: '/resource'
    })
  }

  render () {
    return html`
      <section>
        <admin-resource-list></admin-resource-list>
      </section>
    `
  }
}

customElements.define('admin-resource-container', AdminResourceContainer)
