import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { menu } from '../css/tag-menu-css.js';
import { colors } from '../css/color.js';

export default class TagMenu extends LitElement {
	static get properties () {
		return {
			category: { type: String },
			blogItems: { type: Array, reflect: true },
			tags: { type: Array }
		};
	}

	static get styles () {
		return [
			colors,
			taxonomy,
			menu
		];
	}

	constructor () {
		super();
		this.category = '';
		this.blogItems = [];
		this.tags = [];
	}

	tagsMenu () {
		const concatArray = this.blogItems.reduce((acc, curr) => {
			return acc.concat(curr.tag);
		}, []);

		const map = concatArray.reduce((acc, curr) => {
			acc[curr] = (acc[curr] || 0) + 1;
			return acc;
		}, {});

		for (const key in map) {
			this.tags.push({ tag: key, number: map[key] });
		}
	}

	render () {
		if (this.blogItems.length > 0) {
			return html`
				<section id='tag-menu'>
					<h4 class=${this.category}-header>Categories</h4>
					<ul>
						${this.tagsMenu()}
						${this.tags.map(item => {
							return html`
							<li><a class=${this.category}-link href=/${item.tag}>${item.tag} (${item.number})</a></li>
							`;
						})}
					</ul>
				</section>
			`;
		}
	}
}

customElements.define('tag-menu', TagMenu);
