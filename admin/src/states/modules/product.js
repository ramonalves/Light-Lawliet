let qs = require('qs')

export default {
  state: {
    products: [],
    productsByCategories: [],
    product: {}
  },
  mutations: {
    updateProducts (state, data) {
      state.products = data
    },
    updateProductsByCategories (state, data) {
      state.productsByCategories = data
    },
    updateProduct (state, data) {
      state.product = data
    }
  },
  actions: {
    getAllProducts (context) {
      return window.axios.get('/api/products').then((response) => {
        context.commit('updateProducts', response.data.data)
        return response
      }).catch(e => {
        return e
      })
    },
    getAllProductsByCategories (context, id) {
      return window.axios.get('/api/products/categories/' + id).then((response) => {
        context.commit('updateProductsByCategories', response.data.data)
        return response
      }).catch(e => {
        return e
      })
    },
    getOneProduct (context, id) {
      return window.axios.get('/api/products/' + id).then((response) => {
        context.commit('updateProduct', response.data.data)
        return response
      }).catch(e => {
        return e
      })
    },
    insertProduct (context, data) {
      return window.axios.post('/api/products', qs.stringify(data)).then((response) => {
        return response
      }).catch(e => {
        return e
      })
    },
    updateProduct (context, data) {
      data.category = data.category._id
      return window.axios.put('/api/products/' + data._id, qs.stringify(data)).then((response) => {
        return response
      }).catch(e => {
        return e
      })
    },
    removeProduct (context, id) {
      return window.axios.delete('/api/products/' + id).then((response) => {
        return response
      }).catch(e => {
        return e
      })
    }
  }
}
