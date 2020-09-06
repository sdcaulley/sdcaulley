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
		this.title = '';
	}

	findBlog () {
		return store.blogItems.find(item => {
			return item.title === this.title;
		});
	}

	render () {
		this.title = this.location.params.title;

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
						<p>
							<strong class=${store.category}-label>Tags:</strong>
						</p>
						<ul>
							${blogItem.tag.map(
								tag => html`
									<li><a class=${store.category}-link href=/${tag}/blog>${tag}</a></li>
								`
							)}
						</ul>
						<p>
							<strong class=${store.category}-label>Categories:</strong>
						</p>
						<ul>
							${blogItem.category.map(
								item => html`
									<li><a class=${store.category}-link href=/${store.category}/blog>${item}</a></li>
								`
							)}
						</ul>
					</article>
				`;
	}
}

customElements.define('blog-item', BlogItem);
