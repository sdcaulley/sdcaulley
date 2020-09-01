import { html } from 'lit-element';
import { ViewBase } from './view-base.js';
import { store } from '../state/store.js';
import fetcher from '../utils/fetcher.js';
import { placement } from '../css/blog-container-css.js';
import { taxonomy } from '../css/taxonomy.js';

export default class ResourceContainer extends ViewBase {
	static get styles () {
		return [
			super.styles,
			placement,
			taxonomy
		];
	}

	async firstUpdated () {
		store.resources = await fetcher({
			method: 'GET',
			path: `/resources/${store.category}`
		});
	}

	render () {
		return html`
			<section id='right-sidebar'>
			</section>
			<section id='main'>
				<resource-list></resource-list>
			</section>
		`;
	}
}

customElements.define('resource-container', ResourceContainer);
