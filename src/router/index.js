import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Wishlist from '../views/Wishlist.vue'
import Carts from '../views/Carts.vue'
import NotFound from '../views/NotFound.vue'

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
    component: Register
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && localStorage.access_token) {
    next()
  } else if (to.name === 'Dashboard' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
