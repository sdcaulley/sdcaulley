import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';
import './blog.js';

export default class BlogList extends LitElement {
	static get properties () {
		return {
			location: { type: Object }
		};
	}

	constructor () {
		super();
		this.location = router.location;
	}

	static get styles () {
		return [
			taxonomy,
			css`
				h2 {
					text-transform: capitalize;
				}
			`
		];
	}

	render () {
		const category = this.location.params.category;

		return html`
			<h2>${category}</h2>
			<blog-item .blogItems=${this.blogItems}></blog-item>
		`;
	}
}

customElements.define('blog-list', BlogList);
