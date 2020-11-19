import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Carts from '../views/Carts.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/login' || to.path === '/register') && localStorage.access_token) {
    next({ path: '/' })
  } else if (to.path === '/carts' && !localStorage.access_token) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
