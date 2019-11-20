<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Task Manager</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        <ul class="navbar-nav mr-auto">
          <li v-if="login" class="nav-item active">
            <router-link  class="nav-link" to="/tasks">My Task</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-if="login" class="nav-item active">
            <a class="nav-link signout-btn" @click.prevent="signout">Sign out</a>
          </li>
          <li v-if="!login" class="nav-item">
            <router-link  class="nav-link" to="/signup">Sign up</router-link>
          </li>
          <li v-if="!login" class="nav-item">
            <router-link  class="nav-link" to="/signin">Sign in</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view v-on:login="handleButton"></router-view>
  </div>
</template>

<script>
import Home from './components/home'

export default {
  name: 'App',
  data () {
    return {
      login: false
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
          vm.$router.push('/signin')
          vm.login = false
        })
    },
    handleButton () {
      this.login = true
    }
  }
}
</script>

<style>
.signout-btn {
  cursor: pointer;
}
</style>
