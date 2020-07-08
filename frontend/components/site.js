import { LitElement, html, css } from 'lit-element';
import './category.js';

class Site extends LitElement {
	constructor () {
		super();
		this.categories = ['code', 'craft', 'culture'];
	}

	static get styles () {
		return css`
			site-category {
				display: flex;
				justify-content: space-around;
				margin: auto;
				width: 90%;
			}`;
	}

	render () {
		return html`
			<site-category .categories=${this.categories}></site-category>
		`;
	}
}

customElements.define('sdcaulley-site', Site);
