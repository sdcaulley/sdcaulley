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
		path: '/:category',
		component: 'blog-list',
		action: () => import('./blog-list.js')
	}
]);

export { router };
