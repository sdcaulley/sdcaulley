import { LitElement, html, css } from 'lit-element';

export default class Category extends LitElement {
	static get properties () {
		return {
			categories: { type: Array }
		};
	}

	static get styles () {
		return css`
			button {
				border-radius: 1em;
				border-width: 1.5px;
				height: 5em;
				margin: 1em;
				width: 5em;
			}

			#code {
				border-color: #7DA134;
				color: #577913;
			}

			#craft {
				border-color: #226868;
				color: #0C4E4E;
			}

			#culture {
				border-color: #AD3838;
				color: #821414;
			}
		`;
	}

	render () {
		if (!this.categories) {
			return html``;
		}

		return html`
			<section>
				${this.categories.map(
					category => html`<button id="${category}">${category}</button>`
				)}
			</section>
		`;
	}
}

customElements.define('site-category', Category);
