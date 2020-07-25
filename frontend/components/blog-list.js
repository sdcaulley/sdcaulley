import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';
import './header.js';
import './blog.js';
import './footer.js';

export default class BlogList extends LitElement {
	static get properties () {
		return {
			location: { type: Object, attribute: false },
			category: { type: String, reflect: true }
		};
	}

	static get styles () {
		return [
			taxonomy
		];
	}

	constructor () {
		super();
		this.location = router.location;
		this.category = '';
	}

	render () {
		this.category = this.location.params.category;

		return html`
			<site-header category=${this.category}></site-header>
			<blog-item category=${this.category}></blog-item>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('blog-list', BlogList);
