import { LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import './view-base.js';
import '../../ui/components/category-list.js';
import '../../ui/components/blog-container.js';
import '../../ui/components/blog-item.js';
import '../../ui/components/resource-container.js';
import '../../admin/components/admin-container.js';
import '../../admin/components/admin-blog-item.js';

const viewPlaceholder = document.querySelector('site-container');
const router = new Router(viewPlaceholder);

const childRoutes = [
	{
		path: '/',
		component: 'category-list'
	},
	{
		path: '/:category/blog',
		component: 'blog-container'
	},
	{
		path: '/:category/blog/:title',
		component: 'blog-item'
	},
	{
		path: '/:category/resources',
		component: 'resource-container'
	},
	{
		path: '/admin',
		component: 'admin-container'
	},
	{
		path: '/admin/blog-item',
		component: 'admin-blog'
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
