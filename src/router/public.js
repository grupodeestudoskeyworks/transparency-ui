import Public from '@/components/public/Public'
import Login from '@/components/public/login/Login'
import Register from '@/components/public/register/Register'

export default {
  name: 'Public',
  component: Public,
  path: '/',
  children: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
}
