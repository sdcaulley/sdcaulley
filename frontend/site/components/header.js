import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/header-css.js'
import { colors } from '../../css/color.js'
import { paper } from '../../css/paper-effect.js'
import './main-menu.js'

export default class Header extends MobxLitElement {
  static get styles () {
    return [colors, taxonomy, placement, paper]
  }

  render () {
    return html`
      <header class="paper header">
        <main-menu class="main-menu" category=${store.category}></main-menu>
        <h1 class="site-heading">sdcaulley</h1>
        <h3 class="tag-line">Bringing intention to my daily life</h3>
        <h2 class="${store.category}-header location">${store.location}</h2>
      </header>
    `
  }
}

customElements.define('site-header', Header)
