import { LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import './view-base.js';
import './category-list.js';
import './blog-container.js';
import './blog-item.js';

const viewPlaceholder = document.querySelector('site-container');
const router = new Router(viewPlaceholder);

const childRoutes = [
	{
		path: '/',
		component: 'category-list'
	},
	{
		path: '/:category',
		component: 'blog-container'
	},
	{
		path: '/blog/:title',
		component: 'blog-item'
	}
];

const routes = [
	{
		path: '/',
		component: 'view-base',
		children: childRoutes
	}
];

router.setRoutes(routes);

export class SiteRoutes extends LitElement {}

customElements.define('site-routes', SiteRoutes);

export { router };
