import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';

export default class Header extends LitElement {
	static get styles () {
		return [
			taxonomy,
			css`
				:host {
					display: block;
					margin: auto;
					width: 90%;
				}

				h1 {
					text-align: center;
				}

				h3 {
					text-align: center;
				}

				h2 {
					text-align: center;
					text-transform: capitalize;
				}

				header {
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

	static get properties () {
		return {
			category: String
		};
	}

	constructor () {
		super();
		this.category = '';
	}

	render () {
		return html`
			<header>
				<h1>sdcaulley</h1>
				<h3>Bringing intention to my daily life</h3>
				<h2>${this.category}</h2>
			</header>
		`;
	}
}

customElements.define('site-header', Header);
