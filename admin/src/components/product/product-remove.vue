<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Exlcuir Produto</h3>
          <p>Tem certeza que deseja excluir o produto {{ product.name }}?</p>
          <a href="" class="btn btn-danger" @click.prevent="remove">Sim</a>
          <a href="#/products" class="btn btn-default">Não</a>
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
      remove: function () {
        this.$store.dispatch('removeProduct', this.product._id).then(() => {
          this.$router.push('/products')
        })
      }
    }
  }
</script>
