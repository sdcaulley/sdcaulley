import { LitElement, html } from 'lit-element';
import { taxonomy } from '../css/taxonomy.js';
import { menu } from '../css/main-menu-css.js';

export default class MainMenu extends LitElement {
	static get styles () {
		return [
			taxonomy,
			menu
		];
	}

	static get properties () {
		return {
			category: { type: String }
		};
	}

	displayMenu () {
		switch (this.category) {
			case 'home':
				return html`
					<nav></nav>
				`;
			case 'code':
				return html`
					<nav>
						<img
							src='../css/menu.svg'
							alt='Menu icon'></img>
						<section>
							<a class='code' href='/'>Home</a>
						</section>
					</nav>
				`;
			case 'craft':
				return html`
					<nav>
						<img
							src='../css/menu.svg'
							alt='Menu icon'></img>
						<section>
							<a class='craft' href='/'>Home</a>
						</section>
					</nav>
				`;
			case 'culture':
				return html`
					<nav>
						<img
							src='../css/menu.svg'
							alt='Menu icon'></img>
						<section>
							<a class='craft' href='/'>Home</a>
						</section>
					</nav>
				`;
			default:
				return html`
					<nav></nav>
				`;
		}
	}

	render () {
		return html`
			${this.displayMenu()}
		`;
	}
}

customElements.define('main-menu', MainMenu);
