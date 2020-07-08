import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';

export default class Blog extends LitElement {
	static get properties () {
		return {
			blogItems: { type: Array }
		};
	}

	static get styles () {
		return [
			taxonomy
		];
	}

	render () {
		return html`
			<section>
				${this.blogItems.map(blog => {
					html`
						<article id="blog._id">${blog}</article>
					`;
				})}
			</section>
		`;
	}
}

customElements.define('blog-item', Blog);
