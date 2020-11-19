import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(VueLoading)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/:category',
    name: 'content',
    component: () => import('../views/Content.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
