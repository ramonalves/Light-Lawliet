<template>
 
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('logout').then(() => {
      this.$router.push({path: '/login'})
    }).catch((e) => {
      this.$router.push({path: '/'})
    })
  }
}
</script>

<style>
#wrapper {
    padding-left: 0px; 
}
</style>


