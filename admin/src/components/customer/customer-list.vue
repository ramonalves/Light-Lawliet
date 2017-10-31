<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Clientes</h3>
          <div class="table-responsive">
						<table class="table table-hover">
              <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(customer, index) in customers">
                <td>{{ index + 1 }}</td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.cpf }}</td>
                <td>
                  <a :href="'#/customers/show/' + customer._id" class="btn btn-xs btn-success"><i class="fa fa-eye"> </i></a>
                </td>
              </tr>
            </tbody>
						</table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      customers: function () {
        return this.$store.state.customer.customers
      }
    },
    mounted () {
      this.$store.dispatch('getAll')
    }
  }
</script>
