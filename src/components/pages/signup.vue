<template>
  <div class="row">
    <div class="block col-md-6 offset-md-2">
      <form class="form-signin" @submit.prevent="signup">
        <h1>Please sign up</h1>
        <div class="input-block">
          <label for="inputName" >Name&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input v-model="user.name" class="user-input" type="text" id="inputName" placeholder="User Name" required="" autofocus="">
        </div>
        <div class="input-block">
          <label for="inputEmail" >Email&nbsp;&nbsp;&nbsp;</label>
          <input v-model="user.email" class="user-input" type="text" id="inputEmail" placeholder="Email Address" required="">
        </div>
        <div class="input-block">
          <label for="inputPassword" >Password</label>
          <input v-model="user.password" class="user-input" type="password" id="inputPassword" placeholder="Password" required="">
        </div>
        <button id="submit-btn" type="submit">Sign up</button>
      </form>
    </div>
  </div>
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

.input-block {
  margin-bottom: 15px;
}
#submit-btn {
  margin-top: 30px;
}
</style>
