import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Product',
        component: () => import('../components/home/Product.vue')
      },
      {
        path: 'whistlist',
        name: 'Whistlist',
        component: () => import('../components/home/Whistlist.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../components/home/Cart.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('../views/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../components/auth/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../components/auth/Register.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
