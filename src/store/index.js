import Vue from 'vue'
import Vuex from 'vuex'

import app from './common/app'
import tags from './common/tags'
import routers from './common/routers'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tags,
    routers
  },
  getters
})
export default store
