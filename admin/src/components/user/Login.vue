<template>
  <div class="row" id="login">
    <div class="row logo text-center">
      <img src="/static/img/icons/l_logo.png" class="img-responsive center-block">
    </div>
    <div class="col-sm-6 col-sm-offset-3">
      <div class="card">
        <div class="card-block">
          <h3 class="card-title text-center">Login</h3>
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
            <button class="btn btn-primary btn-block" type="submit">
              Acessar <i class="fa fa-send"></i>
            </button>
            <br>
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
  data: function () {
    return {
      login: {}
    }
  },
  mounted () {
    $('#content').addClass('col-md-6 col-md-offset-3').removeClass('col-md-12')
    return this.$store.state.user.me ? this.$router.push({path: '/'}) : null
  },
  methods: {
    userLogin () {
      this.$store.dispatch('authentication', this.login).then(() => {
        $('#content').removeClass('col-md-6 col-md-offset-3')
        this.$router.push({path: '/'})
      }).catch((e) => {
        $('#alert-error').removeClass('hidden')
        $('#error').text('Login não realizado. ' + e)
      })
    }
  }
}
</script>

<style>
#wrapper {
    padding-left: 0px;
}
.logo{
  margin-bottom: 20px;
  padding: 15px 15px;
}
.logo img {
 max-width: 150px;
}
.card{
  padding-bottom: 50px
}
</style>


