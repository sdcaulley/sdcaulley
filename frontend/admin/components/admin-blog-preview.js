import { html } from 'lit-element'
import { ViewBase } from '../../site/components/view-base.js'
import { placement } from '../css/admin-blog-preview-css.js'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'

export default class AdminBlogPreview extends ViewBase {
  static get styles () {
    return [placement, taxonomy]
  }

  render () {
    return html`
      <article>
        <h4>
          ${store.blogItem.title}
        </h4>
        <p>
          <strong>Created:</strong>
          ${store.blogItem.date_created}
        </p>
        <p>
          <strong>Updated:</strong>
          ${store.blogItem.date_updated}
        </p>
        ${store.blogItem.content.split('\n').map(
          item =>
            html`
              <p>${item}</p>
            `
        )}
        <div class="flex-container">
          <p class="tags">
            <strong class="${store.category}-label">Tags:</strong>
          </p>
          ${store.blogItem.tag.map(
            tag => html`
              <a>${tag}</a>
            `
          )}
        </div>
        <div class="flex-container">
          <p class="tags">
            <strong>Categories:</strong>
          </p>
          ${store.blogItem.category.map(
            item => html`
              <a>${item}</a>
            `
          )}
        </div>
      </article>
    `
  }
}

customElements.define('admin-blog-preview', AdminBlogPreview)
