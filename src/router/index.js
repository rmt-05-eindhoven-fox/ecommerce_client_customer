import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Product from '../components/Product.vue'
import Register from '../views/Register.vue'
import Laptop from '../components/Laptop.vue'
import Handphone from '../components/Handphone.vue'
import Cart from '../components/Cart.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Product',
        component: Product
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'laptop',
        name: 'Laptop',
        component: Laptop
      },
      {
        path: 'handphone',
        name: 'Handphone',
        component: Handphone
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')

//   if (to.name !== 'Login' && !token) {
//     next({ name: 'Login' })
//   } else if (to.name === 'Login' && token) {
//     next({ name: 'Dashboard' })
//   } else {
//     next()
//   }
// })
export default router
