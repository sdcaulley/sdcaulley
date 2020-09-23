import { LitElement } from 'lit-element'
import { Router } from '@vaadin/router'
import './view-base.js'
import '../../ui/components/category-list.js'
import '../../ui/components/blog-container.js'
import '../../ui/components/blog-item.js'
import '../../ui/components/resource-container.js'
import '../../admin/components/admin-container.js'
import '../../admin/components/admin-blog-form.js'
import '../../admin/components/admin-blog-preview.js'
import '../../admin/components/admin-resource-form.js'
import '../../admin/components/admin-resource-preview.js'
import '../../admin/components/admin-quote-form.js'
import '../../admin/components/admin-quote-preview.js'
import '../../admin/components/admin-edit-item.js'
import '../../admin/components/admin-blog-container.js'
import '../../admin/components/admin-blog-item.js'

const viewPlaceholder = document.querySelector('site-container')
const router = new Router(viewPlaceholder)

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
    path: '/admin/blog-form',
    component: 'admin-blog-form'
  },
  {
    path: '/admin/blog-preview',
    component: 'admin-blog-preview'
  },
  {
    path: '/admin/resource-form',
    component: 'admin-resource-form'
  },
  {
    path: '/admin/resource-preview',
    component: 'admin-resource-preview'
  },
  {
    path: '/admin/quote-form',
    component: 'admin-quote-form'
  },
  {
    path: '/admin/quote-preview',
    component: 'admin-quote-preview'
  },
  {
    path: '/admin/edit-item',
    component: 'admin-edit-item'
  },
  {
    path: '/admin/blog-list',
    component: 'admin-blog-container'
  },
  {
    path: '/admin/edit/:title',
    component: 'admin-blog-item'
  }
]

const routes = [
  {
    path: '/',
    component: 'view-base',
    children: childRoutes
  }
]

router.setRoutes(routes)

export class SiteRoutes extends LitElement {}

customElements.define('site-routes', SiteRoutes)

export { router }
