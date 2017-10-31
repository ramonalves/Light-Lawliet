<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Atualizar Produto</h3>
          <form action="" @submit.prevent="save()" enctype="multipart/form-data">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="name">Nome</label>
                <input id="name" type="text" v-model="product.name" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="description">Descrição</label>
                <input id="description" type="text" v-model="product.description" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="price">Preço R$</label>
                <input id="price" type="number" v-model="product.price" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="quantity">Quantidade</label>
                <input id="quantity" type="number" v-model="product.quantity" class="form-control" min="0" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="category">Categoria</label>
                <select id="category" name="category" class="form-control" v-model="product.category._id" required>
                    <option v-for="(category, index) in categories" v-bind:value="category._id" v-if="category._id == product.category._id ? 'selected' : null">{{ category.name }} </option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="images3">Imagem</label>
                <input type="file" id="images3" name="images3" class="form-control">
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
      this.$store.dispatch('updateProduct', this.product).then(() => {
        this.$router.push('/products/show/' + this.product._id)
      }).catch((e) => {
        $('#error').text(e)
      })
    }
  },
  computed: {
    categories: function () {
      return this.$store.state.category.categories
    },
    product: function () {
      return this.$store.state.product.product
    }
  },
  mounted () {
    this.$store.dispatch('getAllCategories')
    this.$store.dispatch('getOneProduct', this.$route.params.id)
  }
}
</script>

