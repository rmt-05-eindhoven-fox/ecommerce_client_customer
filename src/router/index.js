import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/carts',
    name: 'Carts',
    component: () => import('../views/Carts.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: () => import('../views/Wishlists.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
