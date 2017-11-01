<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title"> Produtos da Categoria - {{ productsByCategories[0] ? productsByCategories[0].category.name : null }}</h3>
          <div class="table-responsive">
						<table class="table table-hover">
              <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Disponível</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in productsByCategories">
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td v-if="product.enable">Sim</td>
                <td v-else>Não</td>
                <td>
                  <a :href="'#/products/show/' + product._id" class="btn btn-xs btn-success" title="Ver produto"><i class="fa fa-eye"> </i></a>
                  <a :href="'#/products/edit/' + product._id" class="btn btn-xs btn-primary" title="Editar produtos"><i class="fa fa-edit"></i></a>
                  <a :href="'#/products/remove/' + product._id" class="btn btn-xs btn-danger" title="Excluir produto"><i class="fa fa-trash"></i></a>
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
      productsByCategories: function () {
        return this.$store.state.product.productsByCategories
      }
    },
    mounted () {
      this.$store.dispatch('getAllProductsByCategories', this.$route.params.id)
    }
  }
</script>
