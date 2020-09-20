import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { placement } from '../css/header-css.js'
import { colors } from '../../css/color.js'
import './main-menu.js'

export default class Header extends MobxLitElement {
  static get styles () {
    return [colors, taxonomy, placement]
  }

  render () {
    return html`
      <header>
        <section id="menu">
          <main-menu category=${store.category}></main-menu>
        </section>
        <section id="headings">
          <h1>sdcaulley</h1>
          <h3>Bringing intention to my daily life</h3>
          <h2 class="${store.category}-header">${store.category}</h2>
        </section>
      </header>
    `
  }
}

customElements.define('site-header', Header)
