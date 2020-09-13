import { html } from 'lit-element';
import { ViewBase } from '../../site/components/view-base.js';
import fetcher from '../../utils/fetcher.js';
import { store } from '../../site/state/store.js';
import { placement } from '../css/admin-blog-item-css.js';
import { taxonomy } from '../../css/taxonomy.js';

export default class AdminBlogItem extends ViewBase {
	static get styles () {
		return [
			placement,
			taxonomy
		];
	}

	static get properties () {
		return {
			body: { type: Object },
			category: { type: Array }
		};
	}

	constructor () {
		super();
		this.body = {};
		this.category = ['code', 'craft', 'culture'];
	}

	async formSubmit (e) {
		const result = await fetcher({
			method: 'POST',
			path: '/blog/create',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: this.body
		});

		console.log('result: ', result);
	}

	handleChange (e) {
		const name = e.target.name;

		if (name === 'title' || name === 'content') {
			this.body[name] = e.target.value;
		} else {
			const ele = e.target;
			const values = ele.selectedOptions;
			const tag = [];

			for (let i = 0; i < values.length; i++) {
				tag.push(values[i].label);
			}

			this.body[name] = tag;
		}

		console.log('this.body: ', this.body);
	}

	render () {
		return html`
			<form>
				<label for=title>Title:</label>
				<input
					type=text
					name=title
					@change=${this.handleChange}>
				<label for=content>Content:</label>
				<textarea
					name=content
					@change=${this.handleChange}></textarea>
				<label for=tags>Tags:</label>
				<select name=tags @change=${this.handleChange} multiple>
					${store.tags.map(tag => {
						return html`<option value=${tag.tag}>${tag.tag}</option>`;
					})}
				</select>
				<label for=category>Category:</label>
				<select name=category @change=${this.handleChange} multiple>
					${this.category.map(cat => {
						return html`
							<option value=${cat}>${cat}</option>
						`;
					})}
				</select>
				<button @click=${this.formSubmit}>Submit</button>
			</form>
		`;
	}
}

customElements.define('admin-blog', AdminBlogItem);
