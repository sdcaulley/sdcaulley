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
					background-image: url('ricepaper_v3.png');
					background-color: rgba(250, 240, 230, 0.7);
					border-style: outset;
					border-width: 0.25em;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					margin: 1em;
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

				const result = catFilter.map(blog => {
					const str = blog.content.split('\n');
					blog.content = [];

					for (let i = 0; i < str.length; i++) {
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

	render () {
		if (!this.blogItems) {
			return html`<p> Loading...<-p>`;
		}

		return html`
			<section>
				${this.blogItems.map(
					blog => html`
					<article class=${this.filter}>
						<h4>${blog.title}</h4>
						<p>Created: ${blog.date_created}</p>
						<p>Updated: ${blog.date_updated}</p>
						${blog.content.map(
							item => html`<p>${item}</p>`
						)}
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
