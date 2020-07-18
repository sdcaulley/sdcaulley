import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { router } from './routes.js';
import './header.js';
import './blog.js';
import './footer.js';

export default class BlogList extends LitElement {
	static get properties () {
		return {
			location: { type: Object },
			blogItems: { type: Array, reflect: true },
			category: { type: String }
		};
	}

	static get styles () {
		return [
			taxonomy
		];
	}

	async connectedCallback () {
		super.connectedCallback();
		this.blogItems = await fetch('../blog.json')
			.then(response => response.json())
			.then(data => {
				const catFilter = data.filter(blog => {
					if (blog.category.includes(this.category)) {
						return blog;
					}
				});

				const result = catFilter.map(blog => {
					const str = blog.content.split('\n');
					blog.content = [];

					for (let i = 0; i < str.length - 1; i++) {
						blog.content.push(str[i]);
					}
					return blog;
				});
				return result;
			})
			.catch(err => {
				console.error('Error: ', err);
			});
	}

	constructor () {
		super();
		this.location = router.location;
		this.blogItems = [];
		this.category = '';
	}

	render () {
		this.category = this.location.params.category;

		console.log(this.blogItems);

		if (this.blogItems.length < 1) {
			return html`<p>Loading...</p>`;
		}

		return html`
			<site-header category=${this.category}></site-header>
			<blog-item blogItems=${this.blogItems}></blog-item>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('blog-list', BlogList);
