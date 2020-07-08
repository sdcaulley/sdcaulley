import { Router } from '@vaadin/router';

const viewPlaceholder = document.querySelector('#root');
const router = new Router(viewPlaceholder);

const childRoutes = [
	{
		path: '/',
		component: 'sdcaulley-site',
		action: () => import('./site.js')
	},
	{
		path: '/:category',
		component: 'blog-list',
		action: () => import('./blog-list.js')
	}
];

const routes = [
	{
		path: '/',
		component: 'base-view',
		children: childRoutes
	}
];

router.setRoutes(routes);

export { router };
