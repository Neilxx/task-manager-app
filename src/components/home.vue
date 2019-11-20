<template>
  <div>
    <div class="row ">
      <div class="col-4 title">
        <h1 >Manage Your Task Here</h1>
        <router-link class="cta" to="/signin">Try it out !</router-link>
      </div>
    </div>
    <img src="../assets/home-page.jpg" alt="" id="bg">
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
.title {
  top: 200px;
  position: relative;
  left: 20%;
  background-color: rgba(221,221,221,0.5);
  padding: 10px;
  text-align: center;
  padding: 40px;
  font-family: Courier;
}
#bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 7%;
  left: 0;

  z-index: -10;
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
