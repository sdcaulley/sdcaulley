import { LitElement, html } from 'lit-element';
import './header.js';
import './footer.js';

export class BaseView extends LitElement {
	render () {
		return html`
			<site-header></site-header>
			<slot></slot>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('base-view', BaseView);
