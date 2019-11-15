import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home'
import Signin from '@/components/pages/signin'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Signin',
      path: '/signin',
      component: Signin
    }
  ]
})
