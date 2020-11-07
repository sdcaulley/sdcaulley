import { html } from 'lit-element'
import { ViewBase } from '../../../site/components/view-base.js'
import fetcher from '../../../utils/fetcher.js'
import { store } from '../../../site/state/store.js'
import { placement } from '../../css/admin-blog-container-css.js'
import { taxonomy } from '../../../css/taxonomy.js'
import './admin-blog-list.js'

export default class AdminBlogContainer extends ViewBase {
  static get styles () {
    return [placement, taxonomy]
  }

  static get properties () {
    return {
      location: { type: Object }
    }
  }

  async firstUpdated () {
    store.blogList = await fetcher({
      method: 'GET',
      path: '/blog'
    })

    store.tags = await fetcher({
      method: 'GET',
      path: '/tag'
    })
  }

  render () {
    return html`
      <section>
        <admin-blog-list></admin-blog-list>
      </section>
    `
  }
}

customElements.define('admin-blog-container', AdminBlogContainer)
