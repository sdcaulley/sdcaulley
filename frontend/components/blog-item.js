import { html } from 'lit-element';
import { LitState } from '@danielturner/lit-state';
import { router } from './site-routes.js';
import { colors } from '../css/color.js';
import { placement } from '../css/blog-item-css.js';
import { taxonomy } from '../css/taxonomy.js';

export default class Blog extends LitState {
	static get properties () {
		return {
			location: {
				type: Object,
				attribute: false
			},
			category: { type: String },
			state: { type: Object },
			title: { type: String }
		};
	}

	static get styles () {
		return [
			colors,
			placement,
			taxonomy
		];
	}

	constructor () {
		super();
		this.location = router.location;
		this.category = '';
		this.title = '';
		this.state = {
			blogItems: [],
			category: ''
		};
	}

	findBlog () {
		console.log('state: ', this.state);
		console.log('title: ', this.title);
		const blogItem = this.state.blogItems.find(item => {
			return item.title === this.title;
		});

		console.log('blogItem: ', blogItem);

		return html`
					<article class=${this.category}>
						<h4 class=${this.category}-header>
							${blogItem.title}
						</h4>
						<p>
							<strong class=${this.category}-label>Created:</strong>
								${blogItem.date_created.split(' ').slice(0, 4).join(' ')}
						</p>
						<p>
							<strong class=${this.category}-label>Updated:</strong>
								${blogItem.date_updated.split(' ').slice(0, 4).join(' ')}
						</p>
						${blogItem.content.split('\n').map(
							item => html`<p>${item}</p>`
						)}
						<p>
							<strong class=${this.category}-label>Tags:</strong>
						</p>
						<ul>
							${blogItem.tag.map(
								tag => html`
									<li><a class=${this.category}-link href=/${tag}>${tag}</a></li>
								`
							)}
						</ul>
						<p>
							<strong class=${this.category}-label>Categories:</strong>
						</p>
						<ul>
							${blogItem.category.map(
								item => html`
									<li><a class=${this.category}-link>${item}</a></li>
								`
							)}
						</ul>
					</article>
				`;
	}

	render () {
		this.itemId = this.location.params.title;

		this.findBlog();
	}
}

customElements.define('blog-item', Blog);
