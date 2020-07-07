import { LitElement, html, css } from 'lit-element';
import './category.js';
import './footer.js';

class Site extends LitElement {
	constructor () {
		super();
		this.categories = ['code', 'craft', 'culture'];
	}

	static get styles () {
		return css`
		h1 {
			font-family: "Podkova", serif;
			font-size: 2.986em;
			text-align: center;
		}

		h2 {
			font-family: "Podkova", serif;
			font-size: 2.488em;
		}

		h3 {
			font-family: "Podkova", serif;
			font-size: 2.074em;
		}

		h4 {
			font-family: "Podkova", serif;
			font-size: 1.728em;
		}

		h5 {
			font-family: "Podkova", serif;
			font-size: 1.44em;
		}

		h6 {
			font-family: "Podkova", serif;
			font-size: 1.2em;
		}

		body {
			font-family: "Dosis", sans-serif;
			font-size: 1em;
			font-weight: normal;
		}

		site-category {
			display: flex;
			justify-content: space-around;
			margin: auto;
			width: 90%;
		}
		`;
	}

	render () {
		return html`
			<h1>sdcaulley</h1>
			<site-category .categories=${this.categories}></site-category>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('sdcaulley-site', Site);
