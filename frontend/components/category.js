import { LitElement, html } from 'lit-element';
import { placement } from '../css/category-css.js';
import { taxonomy } from '../css/taxonomy.js';

export default class Category extends LitElement {
	static get properties () {
		return {
			categories: { type: Array }
		};
	}

	static get styles () {
		return [
			placement,
			taxonomy
		];
	}

	constructor () {
		super();
		this.categories = ['code', 'craft', 'culture'];
	}

	render () {
		if (!this.categories) {
			return html``;
		}

		return html`
			<section>
				${this.categories.map(
					category => html`
						<a href="/${category}" id="${category}">${category}</a>
					`
				)}
			</section>
		`;
	}
}

customElements.define('site-category', Category);
