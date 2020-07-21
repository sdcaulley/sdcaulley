import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';
import './header.js';
import './blog.js';
import './footer.js';

export default class BlogList extends LitElement {
	static get properties () {
		return {
			location: { type: Object },
			blogItems: { type: Array },
			category: { type: String }
		};
	}

	static get styles () {
		return [
			taxonomy
		];
	}

	async connectedCallback () {
		super.connectedCallback();
		this.blogItems = await fetch('localhost:5000/blog')
			.then(response => {
				return response;
			})
			.catch(err => {
				console.error('Error: ', err);
			});
	}

	constructor () {
		super();
		this.location = router.location;
		this.blogItems = [];
		this.category = '';
	}

	render () {
		this.category = this.location.params.category;

		if (this.blogItems.length < 1) {
			return html`<p>Loading Blog List...</p>`;
		}

		return html`
			<site-header category=${this.category}></site-header>
			<blog-item blogItems=${this.blogItems}></blog-item>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('blog-list', BlogList);
