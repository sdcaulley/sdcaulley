import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { placement } from '../css/header-css.js';
import './main-menu.js';

export default class Header extends LitElement {
	static get styles () {
		return [
			taxonomy,
			placement
		];
	}

	static get properties () {
		return {
			category: String
		};
	}

	constructor () {
		super();
		this.category = '';
	}

	render () {
		return html`
			<header>
				<section id='menu'>
					<main-menu category=${this.category}></main-menu>
				</section>
				<section id='headings'>
					<h1>sdcaulley</h1>
					<h3>Bringing intention to my daily life</h3>
					<h2 id='${this.category}'>${this.category}</h2>
				</section>
			</header>
		`;
	}
}

customElements.define('site-header', Header);
