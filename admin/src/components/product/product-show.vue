<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Produto - {{ product.name }}</h3>
          <a :href="'#/products/edit/' + product._id" class="btn btn-xs btn-success"><i class="fa fa-edit"> </i></a>
          <a :href="'#/products/remove/' + product._id" class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></a>
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
                <td>{{ product._id }}</td>
              </tr>
              <tr>
                <th>Nome</th>
                <td>{{ product.name }}</td>
              </tr>
              <tr>
                <th>Descrição</th>
                <td>{{ product.description }}</td>
              </tr>
              <tr>
                <th>Categoria</th>
                <td>{{ product.category ? product.category.name : null }}</td>
              </tr>
              <tr>
                 <th>Price</th>
                <td>R$ {{ product.price }}</td>
              </tr>
              <tr>
                <th>Slug</th>
                <td>{{ product.slug }}</td>
              </tr>
              <tr>
                <th>Qtd em Estoque</th>
                <td>{{ product.quantity }}</td>
              </tr>
              <tr>
                <th>Disponível</th>
                <td v-if="product.enable">Sim</td>
                <td v-else>Não</td>
              </tr>
              <tr>
                <th>Data de Criação</th>
                <td>{{ formatDate(product.created) }}</td>
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
      product: function () {
        return this.$store.state.product.product
      }
    },
    mounted () {
      this.$store.dispatch('getOneProduct', this.$route.params.id)
    },
    methods: {
      formatDate (value) {
        return this.$moment(String(value)).format('DD/MM/YYYY HH:mm')
      }
    }
  }
</script>
