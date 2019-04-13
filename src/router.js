import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      component: Home,
      path: '/'
    },
    {
      component: Home,
      path: '/home'
    },
    {
      name: 'dashboard',
      component: Dashboard,
      path: '/dashboard'
    },
    {
      name: 'register',
      component: Register,
      path: '/register'
    },
    {
      name: 'login',
      component: Login,
      path: '/login'
    }
  ]
})
