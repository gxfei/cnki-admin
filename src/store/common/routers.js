import { asyncRouterMap, constantRouterMap } from '@/router'

const routers = {
  state: {
    routers: constantRouterMap,
    addRouters: asyncRouterMap
  },
  mutations: {},
  actions: {}
}
export default routers
