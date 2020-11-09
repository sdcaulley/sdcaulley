import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { Router } from '@vaadin/router'
import * as mobx from 'mobx'
import { store } from '../../../site/state/store.js'
import fetcher from '../../../utils/fetcher.js'
import { taxonomy } from '../../../css/taxonomy.js'
import { placement } from '../../css/admin-list-css.js'
import { paper } from '../../../css/paper-effect.js'

export default class AdminResourceList extends MobxLitElement {
  static get styles () {
    return [placement, taxonomy, paper]
  }

  async deleteItem (e) {
    const id = e.target.value
    const response = await fetcher({
      method: 'DELETE',
      path: `/resource/${id}`
    })

    return html`
      <p>${response}</p>
    `
  }

  async findResource (id) {
    const resourceItem = store.resourceList.find(item => {
      return item._id === id
    })

    return mobx.toJS(resourceItem)
  }

  async editItem (e) {
    store.resourceItem = await this.findResource(e.target.value)
    Router.go('/admin/resource-form')
  }

  render () {
    return html`
      <section>
        <h4>Resource List</h4>
        ${store.resourceList.map(resource => {
          return html`
            <article class="paper">
              <h3>${resource.title}</h3>
              <p>${resource.description}</p>
              <p>Type: ${resource.kind}</p>
              <button
                type="button"
                name="edit"
                value=${resource._id}
                @click=${this.editItem}
              >
                Edit
              </button>
              <button
                type="button"
                name="delete"
                value=${resource._id}
                @click=${this.deleteItem}
              >
                Delete
              </button>
            </article>
          `
        })}
      </section>
    `
  }
}

customElements.define('admin-resource-list', AdminResourceList)
