<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Cliente - {{ customer.name }}</h3>
          <a href="#/customers" class="btn btn-xs btn-success"><i class="fa fa-arrow-left"> </i></a>
          <div class="table-responsive">
						<table class="table table-hover">
              <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{{ customer._id }}</td>
              </tr>
              <tr>
                <th>Nome</th>
                <td>{{ customer.name }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ customer.email }}</td>
              </tr>
              <tr>
                <th>CPF</th>
                <td>{{ customer.cpf }}</td>
              </tr>
              <tr>
                <th>Celular</th>
                <td>{{ customer.cellphone }}</td>
              </tr>
              <tr v-for="(address, index) in customer.address">
                <th>{{ index }}</th>
                <td>{{ address }}</td>
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
      customer: function () {
        return this.$store.state.customer.customer
      }
    },
    mounted () {
      this.$store.dispatch('getOneCustomer', this.$route.params.id)
    }
  }
</script>

