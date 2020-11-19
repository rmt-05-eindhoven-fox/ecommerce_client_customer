import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/product',
        component: () => import('../components/Product.vue')
      },
      {
        path: '/cart',
        component: () => import('../components/Cart.vue')
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
