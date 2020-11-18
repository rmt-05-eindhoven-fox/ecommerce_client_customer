import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import LandingPage from '../views/LandingPage.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'
import ProductsByCategory from '@/components/ProductsByCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/products',
        name: 'Products',
        component: ProductsByCategory
      }
    ]
  },
  {
    path: '/landingPage',
    name: 'LandingPage',
    component: LandingPage,
    children: [
      {
        path: 'signIn',
        name: 'SignIn',
        component: Login
      },
      {
        path: 'signUp',
        name: 'SignUp',
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

export default router
