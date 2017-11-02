<template>
  <div class="hello">
    <h1>Olá, {{ me.user.name.split(' ').slice(0, 1).join(' ')  }}</h1>
    <h4>Bem-vindo ao sistema administrativo do seu e-commerce!</h4>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    me () {
      return this.$store.state.user.me
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#wrapper {
    padding-left: 225px;
}
</style>
