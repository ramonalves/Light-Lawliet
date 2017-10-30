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
    getAll (context) {
      return window.axios.get('/api/categories').then((response) => {
        context.commit('updateCategories', response.data.data)
        return response
      })
    },
    getOne (context, id) {
      return window.axios.get('/api/categories/' + id).then((response) => {
        context.commit('updateCategory', response.data.data)
        return response
      })
    },
    insert (context, data) {
      return window.axios.post('/api/categories', qs.stringify(data)).then((response) => {
        return response
      })
    },
    update (context, data) {
      return window.axios.put('/api/categories/' + data._id, qs.stringify(data)).then((response) => {
        return response
      })
    },
    remove (context, id) {
      return window.axios.delete('/api/categories/' + id).then((response) => {
        return response
      })
    }
  }
}
