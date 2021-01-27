import { Router } from '@vaadin/router'

const childRoutes = [
  // UI
  {
    path: '/',
    component: 'category-list',
    action: async () => {
      await import('../../ui/components/category-list.js')
    }
  },
  {
    path: '/:category/blog',
    component: 'blog-container',
    action: async () => {
      await import('../../ui/components/blog-container.js')
    }
  },
  {
    path: '/:category/blog/:title',
    component: 'blog-item',
    action: async () => {
      await import('../../ui/components/blog-item.js')
    }
  },
  {
    path: '/:category/resources',
    component: 'resource-container',
    action: async () => {
      await import('../../ui/components/resource-container.js')
    }
  },
  // Admin
  {
    path: '/admin',
    component: 'admin-container',
    action: async () => {
      await import('../../admin/components/admin-container.js')
    }
  },
  {
    path: '/admin/create-item',
    component: 'admin-create',
    action: async () => {
      await import('../../admin/components/admin-create.js')
    }
  },
  {
    path: '/admin/edit-item',
    component: 'admin-edit',
    action: async () => {
      await import('../../admin/components/admin-edit.js')
    }
  },
  // Admin blog
  {
    path: '/admin/blog-form',
    component: 'admin-blog-form',
    action: async () => {
      await import('../../admin/components/blog/admin-blog-form.js')
    }
  },
  {
    path: '/admin/blog-list',
    component: 'admin-blog-container',
    action: async () => {
      await import('../../admin/components/blog/admin-blog-container.js')
    }
  },
  {
    path: '/admin/blog-preview',
    component: 'admin-blog-preview',
    action: async () => {
      await import('../../admin/components/blog/admin-blog-preview.js')
    }
  },
  // Admin resource
  {
    path: '/admin/resource-list',
    component: 'admin-resource-container',
    action: async () => {
      await import(
        '../../admin/components/resource/admin-resource-container.js'
      )
    }
  },
  {
    path: '/admin/resource-form',
    component: 'admin-resource-form',
    action: async () => {
      await import('../../admin/components/resource/admin-resource-form.js')
    }
  },
  {
    path: '/admin/resource-preview',
    component: 'admin-resource-preview',
    action: async () => {
      await import('../../admin/components/resource/admin-resource-preview.js')
    }
  },
  // Admin quote
  {
    path: '/admin/quote-form',
    component: 'admin-quote-form',
    action: async () => {
      await import('../../admin/components/quote/admin-quote-form.js')
    }
  },
  {
    path: '/admin/quote-preview',
    component: 'admin-quote-preview',
    action: async () => {
      await import('../../admin/components/quote/admin-quote-preview.js')
    }
  },
  {
    path: '/admin/quote-list',
    component: 'admin-quote-container',
    action: async () => {
      await import('../../admin/components/quote/admin-quote-container.js')
    }
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
