<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Produtos</h3>
          <p><a href="#/products/new"> Add novo produto</a></p>
          <div class="table-responsive">
						<table class="table table-hover">
              <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Valor (R$)</th>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Disponível</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products">
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <td><a :href="'#/products/categories/' + product.category._id"> {{ product.category.name }} </a></td>
                <td>{{ product.quantity }}</td>
                <td v-if="product.enable">Sim</td>
                <td v-else>Não</td>
                <td>
                  <a :href="'#/products/show/' + product._id" class="btn btn-xs btn-success"><i class="fa fa-eye"> </i></a>
                  <a :href="'#/products/remove/' + product._id" class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></a>
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
      products: function () {
        return this.$store.state.product.products
      }
    },
    mounted () {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>
