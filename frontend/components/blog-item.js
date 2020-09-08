import { html } from 'lit-element';
import { ViewBase } from './view-base.js';
import { store } from '../state/store.js';
import { router } from './site-routes.js';
import { colors } from '../css/color.js';
import { placement } from '../css/blog-item-css.js';
import { taxonomy } from '../css/taxonomy.js';

export default class BlogItem extends ViewBase {
	static get properties () {
		return {
			location: {
				type: Object,
				attribute: false
			},
			title: { type: String },
			titleUrl: { type: String }
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
		this.titleUrl = '';
		this.title = '';
	}

	findBlog () {
		return store.blogItems.find(item => {
			return item.title === this.title;
		});
	}

	render () {
		this.titleUrl = this.location.params.title;
		this.title = this.titleUrl.split('_').join(' ');

		const blogItem = this.findBlog();

		return html`
					<article class=${store.category}>
						<h4 class=${store.category}-header>
							${blogItem.title}
						</h4>
						<p>
							<strong class=${store.category}-label>Created:</strong>
								${blogItem.date_created.split(' ').slice(0, 4).join(' ')}
						</p>
						<p>
							<strong class=${store.category}-label>Updated:</strong>
								${blogItem.date_updated.split(' ').slice(0, 4).join(' ')}
						</p>
						${blogItem.content.split('\n').map(
							item => html`<p>${item}</p>`
						)}
						<div class='flex-container'>
							<p>
								<strong class=${store.category}-label>Tags:</strong>
							</p>
							${blogItem.tag.map(
								tag => html`
									<a class=${store.category}-link href=/${tag}/blog>${tag}</a>
								`
							)}
						</div>
						<div class='flex-container'>
							<p>
								<strong class=${store.category}-label>Categories:</strong>
							</p>
							${blogItem.category.map(
								item => html`
									<a class=${store.category}-link href=/${store.category}/blog>${item}</a>
								`
							)}
						</div>
					</article>
				`;
	}
}

customElements.define('blog-item', BlogItem);
