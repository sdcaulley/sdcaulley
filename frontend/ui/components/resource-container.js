import { html } from 'lit-element';
import { ViewBase } from '../../site/components/view-base.js';
import fetcher from '../../utils/fetcher.js';
import { store } from '../../site/state/store.js';
import { placement } from '../css/resource-container-css.js';
import { taxonomy } from '../../css/taxonomy.js';

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
