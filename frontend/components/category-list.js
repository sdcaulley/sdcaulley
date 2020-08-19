import { html } from 'lit-element';
import { ViewBase } from './view-base.js';
import { placement } from '../css/category-css.js';
import { taxonomy } from '../css/taxonomy.js';
import { colors } from '../css/color.js';

class CategoryList extends ViewBase {
	static get styles () {
		return [
			super.styles,
			colors,
			placement,
			taxonomy
		];
	}

	static get properties () {
		return {
			categories: { type: Array }
		};
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
						<a class=${category}-link href=/${category} id=${category}><strong>${category}</strong></a>
					`
				)}
			</section>
		`;
	}
}

customElements.define('category-list', CategoryList);
