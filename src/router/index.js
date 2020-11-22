import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'categories',
        name: 'Category',
        component: () => import('../components/Category.vue'),
        children: [
          {
            path: ':id'
          }
        ]
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../components/Cart.vue')
      },
      {
        path: 'history',
        name: 'TransHistory',
        component: () => import('../components/TransHistory.vue')
      },
      {
        path: '*',
        name: 'NotFound',
        component: NotFound
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/cart' || to.path === '/history') && !localStorage.access_token) next({ name: 'Home' })
  else next()
})

export default router
