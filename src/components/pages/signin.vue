<template>
  <div class="row">
    <div class="block col-md-6 offset-md-2">
      <form class="form-signin" @submit.prevent="signin">
        <h1>Please sign in</h1>
          <p id="login-explain">sign in with demo account that is pre-filled,
            <br> or
            <router-link id="signup-link" to="/signup">sign up</router-link>
            a new account
          </p>
        <div class="input-block">
          <label for="inputEmail" >&nbsp;Email&nbsp;&nbsp;</label>
          <input v-model="user.email" class="user-input" type="email" id="inputEmail" placeholder="Email address" required="" autofocus="">
        </div>
        <div class="input-block">
          <label for="inputPassword" >Password</label>
          <input v-model="user.password" class="user-input" type="password" id="inputPassword" placeholder="Password" required="">
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: 'demo@demo.tw',
        password: 'demodemo'
      }
    }
  },
  methods: {
    signin () {
      const vm = this
      this.axios.post(
        'https://neilxx-task-manager.herokuapp.com/users/login',
        {
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
input {
  padding: 2px 5px;
}

h1 {
  margin-bottom: 30px;
}

.block {
  top: 200px;
  position: relative;
  background-color: rgba(221,221,221,0.5);
  padding: 10px;
  text-align: center;
  padding: 40px;
  font-family: Courier;
}

.cta {
  background-color: #f44336;
  padding: 8px 18px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}

.input-block {
  margin-bottom: 15px;
}

#login-explain {
  margin-bottom: 25px;
}

#signup-link {
  text-decoration: none;
}
</style>
