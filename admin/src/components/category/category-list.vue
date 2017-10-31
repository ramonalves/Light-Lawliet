<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Categorias</h3>
          <p><a href="#/categories/new"> Add nova categoria</a></p>
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
              <tr v-for="(category, index) in categories">
                <td>{{ index + 1 }}</td>
                <td>{{ category.name }}</td>
                <td>{{ category.description }}</td>
                <td v-if="category.enable">Sim</td>
                <td v-else>Não</td>
                <td>
                  <a :href="'#/categories/show/' + category._id" class="btn btn-xs btn-success" title="Ver categoria"><i class="fa fa-eye"> </i></a>
                  <a :href="'#/categories/remove/' + category._id" class="btn btn-xs btn-danger" title="Excluir categoria"><i class="fa fa-trash"></i></a>
                  <a :href="'#/products/categories/' + category._id" class="btn btn-xs btn-primary" title="Listar produtos"><i class="fa fa-shopping-bag"></i></a>
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
      categories: function () {
        return this.$store.state.category.categories
      }
    },
    mounted () {
      this.$store.dispatch('getAllCategories')
    }
  }
</script>
