import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../../../site/state/store.js'
import { placement } from '../css/view-base-css.js'
import './header.js'
import './footer.js'

export class ViewBase extends MobxLitElement {
  static get styles () {
    return [placement]
  }

  constructor () {
    super()
    store.categoryList = ['code', 'craft', 'culture']
  }

  render () {
    return html`
      <div class="wrapper">
        <site-header class="header"></site-header>
        <div class="content"><slot></slot></div>
        <site-footer class="footer"></site-footer>
      </div>
    `
  }
}

customElements.define('view-base', ViewBase)
