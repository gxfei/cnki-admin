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
  },
  {
    path: '/account',
    name: 'account',
    component: Layout,
    children: [
      {
        path: '/account/index',
        name: 'account',
        component: () => import('@/pages/sys/account/index')
      }
    ]
  },
  {
    path: '/database',
    name: 'database',
    component: Layout,
    children: [
      {
        path: '/database/index',
        name: 'database',
        component: () => import('@/pages/sys/database/index')
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/account',
    name: 'account',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'account',
        component: () => import('@/pages/sys/account/index')
      }
    ]
  }
]
