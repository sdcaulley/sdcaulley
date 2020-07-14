import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';

export default class Blog extends LitElement {
	static get properties () {
		return {
			blogItems: {
				type: Array,
				attribute: false
			},
			filter: { type: String }
		};
	}

	static get styles () {
		return [
			taxonomy,
			css`
				a {
					text-decoration: none;
				}

				ul {
					list-style: none;
				}

				li {
					display: inline-block;
					margin: 1em;
				}

				article {
					border-style: solid;
					border-color: black;
					border-width: 1.5px;
					border-radius: 5em;
					padding: 1em 3em;
				}

				h4 {
					margin: 1em;
				}
			`
		];
	}

	constructor () {
		super();
		this.blogItems = [];
		this.filter = '';
	}

	async connectedCallback () {
		super.connectedCallback();
		this.blogItems = await fetch('../blog.json')
			.then(response => response.json())
			.then(data => {
				const catFilter = data.filter(blog => {
					if (blog.category.includes(this.filter)) {
						return blog;
					}
				});
				return catFilter;
			})
			.catch(err => {
				console.error('Error: ', err);
			});
	}

	async filterCategory (filter) {
		this.filtered = await this.blogItems.filter(blog => {
			if (blog.category.includes(filter)) {
				return blog;
			}
		});
	}

	render () {
		if (!this.blogItems) {
			return html`<p> Loading...<-p>`;
		}

		return html`
			<section>
				${this.blogItems.map(
					blog => html`
					<article>
						<h4>${blog.title}</h4>
						<p>Created: ${blog.date_created}</p>
						<p>Updated: ${blog.date_updated}</p>
						${blog.content}
						<p>Tags:</p>
						<ul>
							${blog.tag.map(
								tag => html`
									<li><a>${tag}</a></li>
								`
							)}
						</ul>
						<p>Categories:</p>
						<ul>
							${blog.category.map(
								item => html`
									<li><a>${item}</a></li>
								`
							)}
						</ul>
					</article>`
				)}
			</section>
		`;
	}
}

customElements.define('blog-item', Blog);
