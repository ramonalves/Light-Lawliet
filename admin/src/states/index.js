import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import category from './modules/category'
import product from './modules/product'

window.axios = require('axios')
window.axios.defaults.baseURL = process.env.SERVER
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  modules: {
    user: user,
    category: category,
    product: product
  }
}

Vue.use(Vuex)
export default new Vuex.Store(config)
