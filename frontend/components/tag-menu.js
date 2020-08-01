import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';

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
			taxonomy,
			css`
				div {
					background-color: rgba(250, 240, 230, 0.7);
					border-style: outset;
					border-width: 0.25em;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					margin: 1em;
					padding: 1em 3em;
				}
			`
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
			this.tags.push(`${key} (${map[key]})`);
		}
		console.log('this.tags: ', this.tags);
	}

	render () {
		if (this.blogItems.length > 0) {
			return html`
				<div id='tag-menu'>
					<h4>Categories</h4>
					<ul>
						${this.tagsMenu()}
						${this.tags.map(item => html`
							<li><a>${item}</a></li>
						`)}
					</ul>
				</div>
			`;
		}
	}
}

customElements.define('tag-menu', TagMenu);
