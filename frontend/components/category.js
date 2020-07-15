import { LitElement, html, css } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { dropShadow } from '../css/drop-shadow.js';

export default class Category extends LitElement {
	static get properties () {
		return {
			categories: { type: Array }
		};
	}

	static get styles () {
		return [
			taxonomy,
			dropShadow,
			css`
				a {
					border-radius: 1em;
					border-style: outset;
					border-width: 1.5px;
					display: inline-block;
					height: 5em;
					margin: 1em;
					line-height: 5em;
					text-align: center;
					text-decoration: none;
					width: 5em;
				}

				#code {
					border-color: #7DA134;
					box-shadow: var(--green);
					color: #577913;
				}

				#craft {
					border-color: #226868;
					box-shadow: var(--blue);
					color: #0C4E4E;
				}

				#culture {
					border-color: #AD3838;
					box-shadow: var(--red);
					color: #821414;
				}
			`
		];
	}

	render () {
		if (!this.categories) {
			return html``;
		}

		return html`
			<section>
				${this.categories.map(
					category => html`<a href="/${category}" id="${category}">${category}</a>`
				)}
			</section>
		`;
	}
}

customElements.define('site-category', Category);
