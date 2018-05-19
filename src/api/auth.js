import axios from 'axios'

export default {
  register (user) {
    return axios.post('/api/auth/register', user)
  }
}
