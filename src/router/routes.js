const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/users/Login',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/users/Login.vue') }
    ]
  },
 
  {
    path: '/users',
    component: () => import('layouts/MyLayoutUsers.vue'),
    children: [
      { path: '', component: () => import('pages/users/Index.vue') }
    ]
  },
  {

    path: '/users/Create',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/users/Create.vue') }
    ]
  },
  {
    path: '/users/:cod',
    component: () => import('layouts/MyLayoutUsers.vue'),
    children: [
      { path: '', component: () => import('pages/users/Edit.vue') }
    ]
  },
  
  {
    path: '/category/Create',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/category/Create.vue') }
    ]
  },

  {
    path: '/category/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/category/List.vue') }
    ]
  },
 
  {
    path: '/category/:cod',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/category/Edit.vue') }
    ]
  },
 
  {
    path: '/products',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/products/index.vue') }
    ]
  },

  {
    path: '/products/Create',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/products/Create.vue') }
    ]
  },
  {
    path: '/products/:cod',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/products/Edit.vue') }
    ]
  },
  {
    path: '/admin/Admin',
    component: () => import('layouts/MyLayoutAdmin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Admin.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
