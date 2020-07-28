import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy';

export default class Footer extends LitElement {
	static get styles () {
		return [ taxonomy ];
	}

	render () {
		return html`
			<footer><p>made by sdcaulley &#169 2020</p></footer>
		`;
	}
}

customElements.define('site-footer', Footer);
