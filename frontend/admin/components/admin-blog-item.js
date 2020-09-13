import { html } from 'lit-element';
import { ViewBase } from '../../site/components/view-base.js';
import fetcher from '../../utils/fetcher.js';
import './select-element.js';
import { placement } from '../css/admin-blog-item-css.js';
import { taxonomy } from '../../css/taxonomy.js';

export default class AdminBlogItem extends ViewBase {
	static get styles () {
		return [
			placement,
			taxonomy
		];
	}

	formSubmit () {
		fetcher({
			method: 'POST',
			path: '/blog/create',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
	}

	render () {
		return html`
			<form>
				<label for=title>Title:</label>
				<input type=text name=title>
				<label for=content>Content:</label>
				<textarea name=content></textarea>
				<label for=tags>Tags:</label>
				<select-element type=tags></select-element>
				<label for=category>Category:</label>
				<select-element type=category></select-element>
				<button >Submit</button>
			</form>
		`;
	}
}

customElements.define('admin-blog', AdminBlogItem);
