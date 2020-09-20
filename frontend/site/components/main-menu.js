import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { menu } from '../css/main-menu-css.js'
import { colors } from '../../css/color.js'

export default class MainMenu extends MobxLitElement {
  static get styles () {
    return [colors, taxonomy, menu]
  }

  displayMenu () {
    switch (store.category) {
      case 'home':
        return html`
          <nav></nav>
        `
      case 'code':
        return html`
          <nav>
            <img src='../../css/menu.svg' alt='Menu icon'></img>
            <section>
              <a class=${store.category}-link href='/'>Home</a>
              <a class=${store.category}-link href='/craft/blog'>Craft</a>
              <a class=${store.category}-link href='/culture/blog'>Culture</a>
              <a class=${store.category}-link href='/code/resources'>Resources</a>
            </section>
          </nav>
          `
      case 'craft':
        return html`
          <nav>
            <img src='../css/menu.svg' alt='Menu icon'></img>
            <section>
              <a class=${store.category}-link href='/'>Home</a>
              <a class=${store.category}-link href='/code/blog'>Code</a>
              <a class=${store.category}-link href='/culture/blog'>Culture</a>
              <a class=${store.category}-link href='/craft/resources'>Resources</a>
            </section>
          </nav>
          `
      case 'culture':
        return html`
          <nav>
            <img src='../css/menu.svg' alt='Menu icon'></img>
            <section>
              <a class=${store.category}-link href='/'>Home</a>
              <a class=${store.category}-link href='/code/blog'>Code</a>
              <a class=${store.category}-link href='/craft/blog'>Craft</a>
              <a class=${store.category}-link href='/culture/resources'>Resources</a>
            </section>
          </nav>
        `
      default:
        return html`
          <nav>
            <img src='../css/menu.svg' alt='Menu icon'></img>
            <section>
              <a class=${store.category}-link href='/'>Home</a>
            </section>
          </nav>
        `
    }
  }

  render () {
    return html`
      ${this.displayMenu()}
    `
  }
}

customElements.define('main-menu', MainMenu)
