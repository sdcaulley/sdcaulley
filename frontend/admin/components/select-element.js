import { html } from 'lit-element';
import { MobxLitElement } from '@adobe/lit-mobx';
import { store } from '../../site/state/store.js';
import { taxonomy } from '../../css/taxonomy.js';

export default class SelectElement extends MobxLitElement {
	static get properties () {
		return {
			type: { type: String },
			category: { type: Array }
		};
	}

	static get styles () {
		return [
			taxonomy
		];
	}

	constructor () {
		super();
		this.type = '';
		this.category = ['code', 'craft', 'culture'];
	}

	render () {
		if (this.type === 'tags') {
			return html`
				<select name=tags multiple>
					${store.tags.map(tag => {
						return html`
							<option value=${tag.tag}>${tag.tag}</option>
						`;
					})}
				</select>
			`;
		} else {
			return html`
				<select name=category multiple>
					${this.category.map(cat => {
						return html`
							<option value=${cat}>${cat}</option>
						`;
					})}
				</select>
			`;
		}
	}
}

customElements.define('select-element', SelectElement);
