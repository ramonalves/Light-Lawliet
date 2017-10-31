<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Exlcuir Categoria</h3>
          <p>Tem certeza que deseja excluir a categoria {{ category.name }}?</p>
          <a href="" class="btn btn-danger" @click.prevent="remove">Sim</a>
          <a href="#/categories" class="btn btn-default">Não</a>
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
      remove: function () {
        this.$store.dispatch('removeCategory', this.$route.params.id).then(() => {
          this.$router.push('/categories')
        })
      }
    }
  }
</script>
