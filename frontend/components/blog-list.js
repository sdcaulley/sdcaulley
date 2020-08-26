import { LitElement, html } from 'lit-element';
import { colors } from '../css/color.js';
import { placement } from '../css/blog-list-css.js';
import { taxonomy } from '../css/taxonomy.js';

export default class BlogList extends LitElement {
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

	teaser (item) {
		const array = item.split('.');
		return html`<p>${array[0]}.  ${array[1]}.</p>`;
	}

	render () {
		if (this.blogItems.length === 0) {
			return html`<p>No blog items yet.</p>`;
		}

		return html`
			<section>
				${this.blogItems.map(
					blog => {
						return html`
						<article class=${this.category}>
							<h4>
								<a class=${this.category}-header href=/blog/${blog.title}>${blog.title}</a>
							</h4>
							<p>
								<strong class=${this.category}-label>Updated:</strong>
									${blog.date_updated.split(' ').slice(0, 4).join(' ')}
							</p>
							${this.teaser(blog.content)}
							<p class='tags'>
								<strong class=${this.category}-label>Tags:</strong>
							</p>
								${blog.tag.map(
									tag => html`
										<a class='tags ${this.category}-link' href=/${tag}>${tag}</a>
									`
								)}
						</article>`;
					})}
				</section>`;
	}
}

customElements.define('blog-list', BlogList);
