import { html, css } from 'lit-element';
import { ViewBase } from './view-base.js';
import './category.js';

class Site extends ViewBase {
	static get styles () {
		return [
			css`
				:host {
					display: block;
					margin: auto;
					width: 90%;
				}
			`
		];
	}

	render () {
		return html`
			<site-category></site-category>
		`;
	}
}

customElements.define('sdcaulley-site', Site);
