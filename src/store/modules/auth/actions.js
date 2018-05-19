import authStorage from '@/utils/auth-storage'
import api from '@/api/auth'
import { REGISTERED } from './mutation-types'

export const register = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    api.register(user)
      .then(response => {
        const { data: { accessToken, expiresIn, user } } = response
        const now = new Date()

        const payload = {
          accessToken,
          user,
          expireDate: now.setSeconds(now.getSeconds() + expiresIn)
        }

        commit(REGISTERED, payload)
        authStorage.set(payload)

        resolve()
      }, error => {
        reject(error)
      })
  })
}

export default {
  register
}
