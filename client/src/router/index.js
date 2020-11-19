import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import PurchaseHistory from '../views/PurchaseHistory.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/purchase-history',
    name: 'PurchaseHistory',
    component: PurchaseHistory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.token) {
    store.commit('setLoginStatus', true)
  } else {
    store.commit('setLoginStatus', false)
  }

  if (to.name === 'Cart' && !localStorage.token) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.token) next({ name: 'Home' })
  else if (to.name === 'Register' && localStorage.token) next({ name: 'Home' })
  else if (to.name === 'Checkout' && !localStorage.token) next({ name: 'Login' })
  else if (to.name === 'PurchaseHistory' && !localStorage.token) next({ name: 'Login' })
  else next()
})

export default router
