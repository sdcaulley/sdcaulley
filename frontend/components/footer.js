import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';

export default class Footer extends LitElement {
	static get styles () {
		return [
			taxonomy,
			css`
				:host {
					display: block;
					margin: auto;
					width: 90%;
				}

				footer {
					background-color: rgba(250, 240, 230, 0.7);
					border-style: outset;
					border-width: 0.25em;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					margin: auto;
					padding: 1em 3em;
				}
			`
		];
	}

	render () {
		return html`
			<footer><p>made by sdcaulley &#169 2020</p></footer>
		`;
	}
}

customElements.define('site-footer', Footer);
