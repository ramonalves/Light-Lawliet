let qs = require('qs')

export default {
  state: {
    categories: [],
    category: {}
  },
  mutations: {
    updateCategories (state, data) {
      state.categories = data
    },
    updateCategory (state, data) {
      state.category = data
    }
  },
  actions: {
    getAllCategories (context) {
      return window.axios.get('/api/categories').then((response) => {
        context.commit('updateCategories', response.data.data)
        return response
      })
    },
    getOneCategory (context, id) {
      return window.axios.get('/api/categories/' + id).then((response) => {
        context.commit('updateCategory', response.data.data)
        return response
      })
    },
    insertCategory (context, data) {
      return window.axios.post('/api/categories', qs.stringify(data)).then((response) => {
        return response
      })
    },
    updateCategory (context, data) {
      return window.axios.put('/api/categories/' + data._id, qs.stringify(data)).then((response) => {
        return response
      })
    },
    removeCategory (context, id) {
      return window.axios.delete('/api/categories/' + id).then((response) => {
        return response
      })
    }
  }
}
