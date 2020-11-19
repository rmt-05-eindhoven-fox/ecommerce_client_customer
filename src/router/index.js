import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductHome',
    component: Product
  },
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */'../views/Register.vue')
  },
  {
    path: '/carts',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "carts" */'../views/Cart.vue')
  },
  {
    path: '/add-cart',
    name: 'AddCartForm',
    component: () => import(/* webpackChunkName: "add-cart" */'../views/AddCartForm.vue')
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

export default router
