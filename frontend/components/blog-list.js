import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';
import fetcher from '../utils/fetcher.js';
import './header.js';
import './blog.js';
import './footer.js';

export default class BlogList extends LitElement {
	static get properties () {
		return {
			location: { type: Object, attribute: false },
			blogItems: {
				type: Array,
				reflect: true
			},
			category: { type: String }
		};
	}

	static get styles () {
		return [
			taxonomy
		];
	}

	constructor () {
		super();
		this.location = router.location;
		this.blogItems = [];
		this.category = '';
	}

	async firstUpdated () {
		this.blogItems = await fetcher({
			method: 'GET',
			path: `/blog/${this.category}`
		});
	}

	render () {
		this.category = this.location.params.category;

		return html`
			<site-header category=${this.category}></site-header>
			<blog-item category=${this.category} .blogItems=${this.blogItems}></blog-item>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('blog-list', BlogList);
