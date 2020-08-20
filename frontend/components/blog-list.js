import { html } from 'lit-element';
import { ViewBase } from './view-base.js';
import { router } from './site-routes.js';
import fetcher from '../utils/fetcher.js';
import { placement } from '../css/blog-list-css.js';
import { taxonomy } from '../css/taxonomy.js';
import './blog-item.js';
import './tag-menu.js';

export default class BlogList extends ViewBase {
	static get properties () {
		return {
			location: {
				type: Object,
				attribute: false
			},
			blogItems: {
				type: Array,
				reflect: true
			},
			category: { type: String }
		};
	}

	static get styles () {
		return [
			super.styles,
			placement,
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
		console.log('category: ', this.category);

		return html`
			<section id='right-sidebar'>
				<tag-menu category=${this.category} .blogItems=${this.blogItems}></tag-menu>
			</section>
			<section id='main'>
				<blog-item category=${this.category} .blogItems=${this.blogItems}></blog-item>
			</section>
		`;
	}
}

customElements.define('blog-list', BlogList);
