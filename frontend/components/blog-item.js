import { LitElement, html } from 'lit-element';
import { placement } from '../css/blog-item-css.js';
import { taxonomy } from '../css/taxonomy.js';

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
			placement,
			taxonomy
		];
	}

	constructor () {
		super();
		this.blogItems = [];
		this.category = '';
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
						<p><strong>Created:</strong> ${blog.date_created.split(' ').slice(0, 4).join(' ')}</p>
						<p><strong>Updated:</strong> ${blog.date_updated.split(' ').slice(0, 4).join(' ')}</p>
						${blog.content.split('\n').map(
							item => html`<p>${item}</p>`
						)}
						<p><strong>Tags:</strong></p>
						<ul>
							${blog.tag.map(
								tag => html`
									<li><a>${tag}</a></li>
								`
							)}
						</ul>
						<p><strong>Categories:</strong></p>
						<ul>
							${blog.category.map(
								item => html`
									<li><a>${item}</a></li>
								`
							)}
						</ul>
					</article>`
				)}
			</section>`;
	}
}

customElements.define('blog-item', Blog);
