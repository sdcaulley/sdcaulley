import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';

export default class Category extends LitElement {
	static get properties () {
		return {
			categories: { type: Array }
		};
	}

	static get styles () {
		return [
			taxonomy,
			css`
				a {
					background-image: url('ricepaper_v3.png');
					background-color: rgba(250, 240, 230, 0.7);
					border-style: outset;
					border-width: 0.25em;
					display: inline-block;
					drop-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					height: 5em;
					margin: 1em;
					line-height: 5em;
					text-align: center;
					text-decoration: none;
					width: 5em;
				}
			`
		];
	}

	render () {
		if (!this.categories) {
			return html``;
		}

		return html`
			<section>
				${this.categories.map(
					category => html`<a href="/${category}" id="${category}">${category}</a>`
				)}
			</section>
		`;
	}
}

customElements.define('site-category', Category);
