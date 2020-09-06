import { html } from 'lit-element';
import { MobxLitElement } from '@adobe/lit-mobx';
import { store } from '../state/store.js';
import { taxonomy } from '../css/taxonomy.js';
import { menu } from '../css/tag-menu-css.js';
import { colors } from '../css/color.js';

export default class TagMenu extends MobxLitElement {
	static get properties () {
		return {
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
		this.tags = [];
	}

	tagsMenu () {
		this.tags = [];

		const concatArray = store.blogItems.reduce((acc, curr) => {
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
		if (store.blogItems.length > 0) {
			return html`
				<section id='tag-menu'>
					<h4 class=${store.category}-header>Categories</h4>
					<ul>
						${this.tagsMenu()}
						${this.tags.map(item => {
							return html`
							<li><a class=${store.category}-link href=/${item.tag}/blog>${item.tag} (${item.number})</a></li>
							`;
						})}
					</ul>
				</section>
			`;
		}
	}
}

customElements.define('tag-menu', TagMenu);
