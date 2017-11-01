<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Categoria - {{ category.name }}</h3>
          <a :href="'#/categories/edit/' + category._id" class="btn btn-xs btn-success"><i class="fa fa-edit"> </i></a>
          <a :href="'#/categories/remove/' + category._id" class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></a>
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
                <td>{{ category._id }}</td>
              </tr>
              <tr>
                <th>Nome</th>
                <td>{{ category.name }}</td>
              </tr>
              <tr>
                <th>Descrição</th>
                <td>{{ category.description }}</td>
              </tr>
              <tr>
                <th>Disponível</th>
                <td v-if="category.enable">Sim</td>
                <td v-else>Não</td>
              </tr>
              <tr>
                <th>Data de Criação</th>
                <td>{{ formatDate(category.created) }}</td>
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
      category: function () {
        return this.$store.state.category.category
      }
    },
    mounted () {
      this.$store.dispatch('getOneCategory', this.$route.params.id)
    },
    methods: {
      formatDate (value) {
        return this.$moment(String(value)).format('DD/MM/YYYY HH:mm')
      }
    }
  }
</script>

