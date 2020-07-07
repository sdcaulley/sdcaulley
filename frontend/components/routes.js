import { Router } from '@vaadin/router';

const viewPlaceholder = document.querySelector('#root');
const router = new Router(viewPlaceholder);

router.setRoutes([
	{
		path: '/',
		component: 'sdcaulley-site',
		action: () => import('./site.js')
	},
	{
		path: '/code',
		component: 'blog-list',
		action: () => import('./blog-list.js')
	},
	{
		path: '/craft',
		component: 'blog-list',
		action: () => import('./blog-list.js')
	},
	{
		path: '/culture',
		component: 'blog-list',
		action: () => import('./blog-list.js')
	}
]);

export { router };
