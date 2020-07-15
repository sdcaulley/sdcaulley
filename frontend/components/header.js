import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy';

export default class Header extends LitElement {
	static get styles () {
		return [
			taxonomy,
			css`
				h1 {
					color: #385400;
				}

				h3 {
					text-align: center;
				}

				h2 {
					text-align: center;
					text-transform: capitalize;
				}

				header {
					border-style: outset;
					border-width: 1.5px;
					border-radius: 5em;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					margin: auto;
					padding: 1em 3em;
					width: 50%;
				}
			`
		];
	}

	static get properties () {
		return {
			category: String
		};
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
