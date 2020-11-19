import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Content',
    component: Content
  },
  {
    path: '/landing',
    name: 'LandingPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "landingpage" */ '../views/LandingPage.vue'),
    children: [
      {
        path: '/signin',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "signin" */ '../components/SignIn.vue')
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "signup" */ '../components/SignUp.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
