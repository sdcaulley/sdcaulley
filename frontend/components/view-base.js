import { LitElement, html, css } from 'lit-element';
import { router } from './site-routes.js';
import './header.js';
import './footer.js';

export class ViewBase extends LitElement {
	static get properties () {
		return {
			location: { type: Object, attribute: false },
			category: { type: String }
		};
	}

	static get styles () {
		return [
			css`
				:host {
					display: block;
					position: inherit;
					width: 100%;
				}
			`
		];
	}

	constructor () {
		super();
		this.location = router.location;
		this.category = '';
	}

	render () {
		this.category = this.location.params.category || 'Home';

		return html`
			<site-header category=${this.category}></site-header>
			<slot></slot>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('view-base', ViewBase);
