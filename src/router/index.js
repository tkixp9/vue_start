import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../pages/product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
