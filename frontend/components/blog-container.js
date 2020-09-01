import { html } from 'lit-element';
import { ViewBase } from './view-base.js';
import { router } from './site-routes.js';
import fetcher from '../utils/fetcher.js';
import { store } from '../state/store.js';
import { placement } from '../css/blog-container-css.js';
import { taxonomy } from '../css/taxonomy.js';
import './blog-list.js';
import './tag-menu.js';

export default class BlogContainer extends ViewBase {
	static get styles () {
		return [
			placement,
			taxonomy
		];
	}

	static get properties () {
		return {
			location: { type: Object }
		};
	}

	constructor () {
		super();
		this.location = router.location;
	}

	async firstUpdated () {
		store.blogItems = await fetcher({
			method: 'GET',
			path: `/blog/${store.category}`
		});
	}

	render () {
		store.category = this.location.params.category;

		return html`
			<section id='right-sidebar'>
				<tag-menu></tag-menu>
			</section>
			<section id='main'>
				<blog-list></blog-list>
			</section>
		`;
	}
}

customElements.define('blog-container', BlogContainer);
