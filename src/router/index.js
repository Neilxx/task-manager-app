import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home'
import Signin from '@/components/pages/signin'
import Signup from '@/components/pages/signup'
import Tasks from '@/components/pages/tasks'

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
    },
    {
      name: 'Signup',
      path: '/signup',
      component: Signup
    },
    {
      name: 'Tasks',
      path: '/tasks',
      component: Tasks
    }
  ]
})
