import { LitElement, html, css } from 'lit-element';

export default class Blog extends LitElement {
	static get properties () {
		return {
			category: { type: String },
			blogItems: {
				type: Array,
				reflect: true
			}
		};
	}

	static get styles () {
		return [
			css`
				li {
					display: inline-block;
					margin: 1em;
				}

				article {
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
	}

	render () {
		if (this.blogItems.length === 0) {
			return html`<p>No blog items yet.</p>`;
		}

		return html`
			<section>
				${this.blogItems.map(
					blog => html`
					<article class=${this.category}>
						<h4>${blog.title}</h4>
						<p>Created: ${blog.date_created.split(' ').slice(0, 4).join(' ')}</p>
						<p>Updated: ${blog.date_updated.split(' ').slice(0, 4).join(' ')}</p>
						${blog.content.split('\n').map(
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
