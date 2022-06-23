import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'form'
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/form/:index',
    name: 'formedit',
    component: Form
  },
  {
    path: '/list',
    name: 'list',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
