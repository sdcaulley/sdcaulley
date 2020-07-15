import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';
import './header.js';
import './blog.js';
import './footer.js';

export default class BlogList extends LitElement {
	static get properties () {
		return {
			location: { type: Object }
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
	}

	render () {
		const category = this.location.params.category;
		return html`
			<site-header category=${category}></site-header>
			<blog-item filter=${category}></blog-item>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('blog-list', BlogList);
