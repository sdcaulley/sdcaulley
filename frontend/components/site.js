import { html, css } from 'lit-element';
import Component from './base-component.js';
import './header.js';
import './footer.js';
import './category.js';

class Site extends Component {
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
			<site-header></site-header>
			<site-category .categories=${this.categories}></site-category>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('sdcaulley-site', Site);
