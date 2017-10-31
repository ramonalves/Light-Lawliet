let qs = require('qs')

export default {
  state: {
    customers: [],
    customer: {}
  },
  mutations: {
    updateCustomers (state, data) {
      state.customers = data
    },
    updateCustomer (state, data) {
      state.customer = data
    }
  },
  actions: {
    getAll (context) {
      return window.axios.get('/api/customers').then((response) => {
        context.commit('updateCustomers', response.data.data)
        return response
      })
    },
    getOne (context, id) {
      return window.axios.get('/api/customers/' + id).then((response) => {
        context.commit('updateCutomer', response.data.data)
        return response
      })
    },
    update (context, data) {
      return window.axios.put('/api/customers/' + data._id, qs.stringify(data)).then((response) => {
        return response
      })
    }
  }
}
