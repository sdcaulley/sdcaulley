import { html, css } from 'lit-element';
import { ViewBase } from './view-base.js';
import './category.js';

class Site extends ViewBase {
	constructor () {
		super();
		this.categories = ['code', 'craft', 'culture'];
	}

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
			<site-category .categories=${this.categories}></site-category>
		`;
	}
}

customElements.define('sdcaulley-site', Site);
