<template>
  <div>
    <div class="row ">
      <div class="col-4 block">
        <h1 >Manage Your Task Here</h1>
        <router-link class="cta" to="/signin">Try it out !</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.block {
  top: 200px;
  position: relative;
  left: 20%;
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
h1 {
  margin-bottom: 50px;
}
</style>
