import Vue from 'vue'
import Router from 'vue-router'
import Kriterien from '@/components/Kriterien'
import NotAuth from '@/components/NotAuth'
import {requireAuth} from '../utils/auth'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [    
    {
      path: '/',
      beforeEnter: requireAuth,
      component: Kriterien
    },
    {
      path: '/notAuth',
      name: 'notauth',
      component: NotAuth
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
