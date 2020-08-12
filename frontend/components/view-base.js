import { LitElement, html, css } from 'lit-element';
import './header.js';
import './footer.js';

const defaultDocTitle = 'Home of scaulley';
const currPageTitle = pageTitle => `${pageTitle} - sdcaulley`;

export class ViewBase extends LitElement {
	static get styles () {
		return [
			css`
				:host {
					display: block;
					width: 100%;
				}
			`
		];
	}

	setDocumentTitle (pageTitle) {
		document.title = pageTitle ? currPageTitle(pageTitle) : defaultDocTitle;
	}

	render () {
		return html`
			<site-header></site-header>
			<slot></slot>
			<site-footer></site-footer>
		`;
	}
}

customElements.define('view-base', ViewBase);
