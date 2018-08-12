import Kriterien from '@/components/Kriterien'
import NotAuth from '@/components/NotAuth'
import {requireAuth} from '../utils/auth'

export default[
      {
        path: '/',
        name:'Home',
        beforeEnter: requireAuth,
        component: Kriterien
      },
      {
        path: '/notAuth',
        name: 'notauth',
        beforeEnter: requireAuth,
        component: NotAuth
      },
      {
        path: '*',
        redirect:'/'
      }
]