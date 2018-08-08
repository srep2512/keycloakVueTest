import Kriterien from '@/components/Kriterien'
import NotAuth from '@/components/NotAuth'

export default[
      {
        path: '/',
        meta:{requiresAuth:true},
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