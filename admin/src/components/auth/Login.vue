<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Autenticação</h3>
          <form @submit.prevent="userLogin()">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="login.username" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="password">Senha</label>
                <input id="password" type="password" v-model="login.password" class="form-control" required>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              Acessar <i class="fa fa-send"></i>
            </button>
            <p id="error" class="text-danger"></p>
          </form>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title">Registro</h3>
          <form @submit.prevent="userRegister()">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="name">Nome</label>
                <input id="name" type="text" v-model="register.name" class="form-control" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="register.email" class="form-control" required>
            </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="password_register">Senha</label>
                <input id="password_register" type="password" v-model="register.password" class="form-control" required>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              Registrar <i class="fa fa-send"></i>
            </button>
            <p id="error-register" class="text-danger"></p>
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
      login: {},
      register: {}
    }
  },
  methods: {
    userLogin () {
      this.$store.dispatch('authentication', this.login).then(() => {
        this.$router.push({path: '/'})
      }).catch((e) => {
        $('#error').text(e)
      })
    },
    userRegister () {
      this.$store.dispatch('register', this.register).then(() => {
        this.$router.push({path: '/'})
      }).catch((e) => {
        $('#error-register').text(e)
      })
    }
  }
}
</script>

