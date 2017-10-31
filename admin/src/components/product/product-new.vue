<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Novo Produto</h3>
          <form action="" @submit.prevent="save()" enctype="multipart/form-data">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="name">Nome</label>
                <input id="name" type="text" v-model="data.name" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="description">Descrição</label>
                <input id="description" type="text" v-model="data.description" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="price">Preço R$</label>
                <input id="price" type="number" v-model="data.price" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="quantity">Quantidade</label>
                <input id="quantity" type="number" v-model="data.quantity" class="form-control" min="0" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="category">Categoria</label>
                <select id="category" name="category" class="form-control" v-model="data.category" required>
                    <option v-for="(category, index) in categories" v-bind:value="category._id">{{ category.name }}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="images3">Imagem</label>
                <input type="file" id="images3" name="images3" class="form-control" required>
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
  data: function () {
    return {
      data: {}
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('insertProduct', this.data).then(() => {
        this.$router.push('/products')
      }).catch((e) => {
        $('#error').text(e)
      })
    }
  },
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

