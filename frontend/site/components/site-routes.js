import { Router } from '@vaadin/router'
import '../../ui/components/category-list.js'
import '../../ui/components/blog-container.js'
import '../../ui/components/blog-item.js'
import '../../ui/components/resource-container.js'
import '../../admin/components/admin-container.js'
import '../../admin/components/admin-create.js'
import '../../admin/components/admin-edit.js'
import '../../admin/components/blog/admin-blog-form.js'
import '../../admin/components/blog/admin-blog-preview.js'
import '../../admin/components/blog/admin-blog-container.js'
import '../../admin/components/resource/admin-resource-container.js'
import '../../admin/components/resource/admin-resource-form.js'
import '../../admin/components/resource/admin-resource-preview.js'
import '../../admin/components/quote/admin-quote-form.js'
import '../../admin/components/quote/admin-quote-preview.js'
import '../../admin/components/quote/admin-quote-container.js'

const childRoutes = [
  // UI
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
  // Admin
  {
    path: '/admin',
    component: 'admin-container'
  },
  {
    path: '/admin/create-item',
    component: 'admin-create'
  },
  {
    path: '/admin/edit-item',
    component: 'admin-edit'
  },
  // Admin blog
  {
    path: '/admin/blog-form',
    component: 'admin-blog-form'
  },
  {
    path: '/admin/blog-list',
    component: 'admin-blog-container'
  },
  {
    path: '/admin/blog-preview',
    component: 'admin-blog-preview'
  },
  // Admin resource
  {
    path: '/admin/resource-list',
    component: 'admin-resource-container'
  },
  {
    path: '/admin/resource-form',
    component: 'admin-resource-form'
  },
  {
    path: '/admin/resource-preview',
    component: 'admin-resource-preview'
  },
  // Admin quote
  {
    path: '/admin/quote-form',
    component: 'admin-quote-form'
  },
  {
    path: '/admin/quote-preview',
    component: 'admin-quote-preview'
  },
  {
    path: '/admin/quote-list',
    component: 'admin-quote-container'
  }
]

const routes = [
  {
    path: '/',
    component: 'view-base',
    children: childRoutes
  }
]

const viewPlaceholder = document.getElementById('anchor')
const router = new Router(viewPlaceholder)
router.setRoutes(routes)

export { router }
