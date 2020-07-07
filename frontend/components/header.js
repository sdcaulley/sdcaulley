import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy';

export default class Header extends LitElement {
	static get styles () {
		return [ taxonomy ];
	}

	render () {
		return html`
			<header>
				<h1>sdcaulley</h1>
			</header>
		`;
	}
}

customElements.define('site-header', Header);
