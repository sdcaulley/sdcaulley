import { html } from 'lit-element';
import { ViewBase } from '../../site/components/view-base.js';
import fetcher from '../../utils/fetcher.js';
import { store } from '../../site/state/store.js';
import { taxonomy } from '../../css/taxonomy.js';
import { placement } from '../css/admin-container-css.js';

export default class AdminContainer extends ViewBase {
	static get styles () {
		return [
			taxonomy,
			placement
		];
	}

	async firstUpdated () {
		store.tags = await fetcher({
			method: 'GET',
			path: '/tag'
		});
	}

	render () {
		return html`
			<section>
				<a href=/admin/blog-item>Blog Item</a>
				<a href=/admin/resource-item>Resource Item</a>
				<a href=/admin/quote>Quote</a>
			</section>
		`;
	}
}

customElements.define('admin-container', AdminContainer);