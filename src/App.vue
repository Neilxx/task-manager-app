<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Task Manager</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" @click.prevent="signout">Sign out</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signin">Sign in</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/home'

export default {
  name: 'App',
  data () {
    return {
      login: true
    }
  },
  components: {
    Home
  },
  methods: {
    signout () {
      const vm = this
      this.axios({
        method: 'post',
        url: 'https://neilxx-task-manager.herokuapp.com/users/logout',
        responseType: 'json',
        withCredentials: true
      })
        .then(function (res) {
          vm.$router.push('/')
        })
    }
  }
}
</script>

<style>
</style>
