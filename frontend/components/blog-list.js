import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';

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
				p {
					text-transform: capitalize;
				}
			`
		];
	}

	render () {
		const category = this.location.params.category;

		return html`<p>Hello ${category} Blog</p>`;
	}
}

customElements.define('blog-list', BlogList);
