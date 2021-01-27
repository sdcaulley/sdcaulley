import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { menu } from '../css/main-menu-css.js'
import { colors } from '../../css/color.js'
import { paper } from '../../css/paper-effect.js'

export default class MainMenu extends MobxLitElement {
  static get styles () {
    return [colors, taxonomy, menu, paper]
  }

  displayMenu () {
    switch (store.location) {
      case 'home':
        return html`
          <nav>
            <a class="menu-item" href="/">Home</a>
          </nav>
        `
      case 'admin':
        return html`
          <nav>
            <a class="menu-item" href="/admin">Admin</a>
            <a class="menu-item" href="/">Home</a>
          </nav>
        `
      case 'code':
        return html`
          <nav>
            <a class="${store.category}-link menu-item" href="/">Home</a>
            <a class="${store.category}-link menu-item" href="/craft/blog"
              >Craft</a
            >
            <a class="${store.category}-link menu-item" href="/culture/blog"
              >Culture</a
            >
            <a class="${store.category}-link menu-item" href="/code/resources"
              >Resources</a
            >
          </nav>
        `
      case 'craft':
        return html`
          <nav>
            <a class="${store.category}-link menu-item" href="/">Home</a>
            <a class="${store.category}-link menu-item" href="/code/blog"
              >Code</a
            >
            <a class="${store.category}-link menu-item" href="/culture/blog"
              >Culture</a
            >
            <a class="${store.category}-link menu-item" href="/craft/resources"
              >Resources</a
            >
          </nav>
        `
      case 'culture':
        return html`
          <nav>
            <a class="${store.category}-link menu-item" href="/">Home</a>
            <a class="${store.category}-link menu-item" href="/code/blog"
              >Code</a
            >
            <a class="${store.category}-link menu-item" href="/craft/blog"
              >Craft</a
            >
            <a
              class="${store.category}-link menu-item"
              href="/culture/resources"
              >Resources</a
            >
          </nav>
        `
      default:
        return html`
          <nav>
            <a class="${store.category}-link menu-item" href="/">Home</a>
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
