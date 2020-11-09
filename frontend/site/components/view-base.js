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
      <site-header></site-header>
      <slot></slot>
      <site-footer></site-footer>
    `
  }
}

customElements.define('view-base', ViewBase)
