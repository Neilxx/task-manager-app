<template>
  <form class="form-signin" @submit.prevent="signup">
    <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
    <label for="inputName" class="sr-only">Name</label>
    <input v-model="user.name" type="name" id="inputName" class="form-control" placeholder="User Name" required="" autofocus="">
    <label for="inputEmail" class="sr-only">Email address</label>
    <input v-model="user.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="">
    <label for="inputPassword" class="sr-only">Password</label>
    <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup () {
      const vm = this
      this.axios.post(
        'https://neilxx-task-manager.herokuapp.com/users',
        {
          name: vm.user.name,
          email: vm.user.email,
          password: vm.user.password
        },
        { withCredentials: true }
      )
        .then(function (res) {
          vm.$emit('login')
          vm.$router.push('/tasks')
        })
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
