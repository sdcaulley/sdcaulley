import { LitElement, html } from 'lit-element';
import { router } from './site-main.js';
import fetcher from '../utils/fetcher.js';
import './header.js';
import './blog.js';
import './footer.js';
import './tag-menu.js';

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
			<tag-menu category=${this.category} .blogItems=${this.blogItems}></tag-menu>
			<blog-item category=${this.category} .blogItems=${this.blogItems}></blog-item>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('blog-list', BlogList);
