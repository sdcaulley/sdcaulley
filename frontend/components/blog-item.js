import { LitElement, html } from 'lit-element';
import { colors } from '../css/color.js';
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
			colors,
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
						<h4 class=${this.category}-header>
							${blog.title}
						</h4>
						<p>
							<strong class=${this.category}-label>Created:</strong>
								${blog.date_created.split(' ').slice(0, 4).join(' ')}
						</p>
						<p>
							<strong class=${this.category}-label>Updated:</strong>
								${blog.date_updated.split(' ').slice(0, 4).join(' ')}
						</p>
						${blog.content.split('\n').map(
							item => html`<p>${item}</p>`
						)}
						<p>
							<strong class=${this.category}-label>Tags:</strong>
						</p>
						<ul>
							${blog.tag.map(
								tag => html`
									<li><a class=${this.category}-link href=/${tag}>${tag}</a></li>
								`
							)}
						</ul>
						<p>
							<strong class=${this.category}-label>Categories:</strong>
						</p>
						<ul>
							${blog.category.map(
								item => html`
									<li><a class=${this.category}-link>${item}</a></li>
								`
							)}
						</ul>
					</article>`
				)}
			</section>`;
	}
}

customElements.define('blog-item', Blog);
