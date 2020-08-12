import { LitElement } from 'lit-element';
import { Router } from '@vaadin/router';

import './view-base.js';
import './site.js';
import './blog-list.js';

const viewPlaceholder = document.querySelector('site-container');
const router = new Router(viewPlaceholder);

const childRoutes = [
	{
		path: '/',
		component: 'sdcaulley-site'
	},
	{
		path: '/:category',
		component: 'blog-list'
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

export class SiteMain extends LitElement {}

customElements.define('site-main', SiteMain);

export { router };
