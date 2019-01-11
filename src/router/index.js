import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/common/layout'
import Login from '@/pages/common/login'
import Identity from '@/pages/common/identity'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/identity',
    name: 'Identity',
    component: Identity
  }
]

export default new Router({
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  }
]
