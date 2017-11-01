<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Atualizar Categoria</h3>
          <form action="" @submit.prevent="save()">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="name">Nome</label>
                <input id="name" type="text" v-model="category.name" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="description">Descrição</label>
                <input id="description" type="text" v-model="category.description" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <input type="submit" value="Salvar" class="btn btn-success btn-block">
              </div>
            </div>
            <p id="error" class="text-danger"></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'
export default {
  methods: {
    save: function () {
      this.$store.dispatch('updateCategory', this.category).then(() => {
        this.$router.push('/categories/show/' + this.category._id)
      }).catch((e) => {
        $('#error').text(e)
      })
    }
  },
  computed: {
    category: function () {
      return this.$store.state.category.category
    }
  },
  mounted () {
    this.$store.dispatch('getOneProduct', this.$route.params.id)
  }
}
</script>

