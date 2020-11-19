import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration'
import Login from '../components/Login'
import Register from '../components/Register'
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'
import EditCart from '../views/EditCart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Product',
        component: ProductCard
      },
      {
        path: '/carts',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/carts/:id',
        name: 'EditCart',
        component: EditCart
      }
    ]
  },
  {
    path: '/login',
    name: 'Registration',
    component: Registration,
    children: [
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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Cart' && !localStorage.getItem('access_token')) {
    next('/login')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.getItem('access_token')) {
    next('/')
  } else {
    next()
  }
})

export default router
