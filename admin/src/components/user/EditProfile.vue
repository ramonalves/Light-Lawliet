<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Atualizar Perfil</h3>
          <form action="" @submit.prevent="save()">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="name">Nome</label>
                <input id="name" type="text" v-model="me.user.name" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="email">E-mail</label>
                <input id="email" type="text" v-model="me.user.email" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="password">Senha</label>
                <input id="password" type="password" v-model="me.user.password" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <input type="submit" value="Salvar" class="btn btn-success btn-block">
              </div>
            </div>
            <div class="alert alert-success text-center hidden" role="alert" id="alert-success">
              <p id="msg" class="text-success"></p>
            </div>
            <div class="alert alert-danger text-center hidden" role="alert" id="alert-error">
              <p id="error" class="text-danger"></p>
            </div>
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
      $('#msg, #error').html('')
      $('#alert-success, #alert-error').addClass('hidden')
      this.$store.dispatch('updateUser', this.me.user).then(() => {
        $('#alert-success').removeClass('hidden')
        $('#msg').text('Perfil atualizado com sucesso.')
      }).catch((e) => {
        $('#alert-error').removeClass('hidden')
        $('#error').text('Perfil não atualizado: ' + e)
      })
    }
  },
  computed: {
    me: function () {
      return this.$store.state.user.me
    }
  },
  mounted () {
    this.$store.dispatch('getCurrentUser', this.$route.params.id)
  }
}
</script>

