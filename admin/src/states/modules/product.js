let qs = require('qs')

export default {
  state: {
    products: [],
    product: {}
  },
  mutations: {
    updateProducts (state, data) {
      state.products = data
    },
    updateProduct (state, data) {
      state.product = data
    }
  },
  actions: {
    getAll (context) {
      return window.axios.get('/api/products').then((response) => {
        context.commit('updateProducts', response.data.data)
        return response
      })
    },
    getOne (context, id) {
      return window.axios.get('/api/products/' + id).then((response) => {
        context.commit('updateProduct', response.data.data)
        return response
      })
    },
    insert (context, data) {
      return window.axios.post('/api/products', qs.stringify(data)).then((response) => {
        return response
      })
    },
    update (context, data) {
      return window.axios.put('/api/products/' + data._id, qs.stringify(data)).then((response) => {
        return response
      })
    },
    remove (context, id) {
      return window.axios.delete('/api/products/' + id).then((response) => {
        return response
      })
    }
  }
}
