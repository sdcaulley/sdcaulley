import { html, css } from 'lit-element';
import { LitState } from '@danielturner/lit-state';
import { router } from './site-routes.js';
import './header.js';
import './footer.js';

export class ViewBase extends LitState {
	static get properties () {
		return {
			location: { type: Object, attribute: false },
			category: { type: String },
			state: { type: Object }
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
		this.state = {
			category: this.category
		};
	}

	render () {
		this.category = this.location.params.category || 'Home';

		return html`
			<lit-controller></lit-controller>
			<site-header category=${this.category}></site-header>
			<slot></slot>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('view-base', ViewBase);
