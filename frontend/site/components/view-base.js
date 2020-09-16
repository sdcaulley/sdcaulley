import { html, css } from 'lit-element';
import { MobxLitElement } from '@adobe/lit-mobx';
import './header.js';
import './footer.js';

export class ViewBase extends MobxLitElement {
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

	render () {
		return html`
			<site-header></site-header>
			<slot></slot>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('view-base', ViewBase);