import { LitElement, html } from 'lit-element'
import { taxonomy } from '../../css/taxonomy.js'
import { footer } from '../css/footer-css.js'
import { paper } from '../../css/paper-effect.js'

export default class Footer extends LitElement {
  static get styles () {
    return [taxonomy, footer, paper]
  }

  render () {
    return html`
      <footer class=paper><p>made by sdcaulley &#169 2020</p></footer>
    `
  }
}

customElements.define('site-footer', Footer)
