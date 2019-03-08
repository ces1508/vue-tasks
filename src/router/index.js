import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Register from '@/views/Register'
import Home from '@/views/Home'
import TasksCompleted from '@/views/Completed'
import Account from '@/views/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/completed',
      name: 'completed',
      component: TasksCompleted
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})
