import actions from './actions'
import authStorage from '@/utils/auth-storage'
import mutations from './mutations'
import getters from './getters'

const { accessToken, expireDate, user } = authStorage.get()

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    accessToken,
    expireDate,
    user
  },
  actions,
  mutations,
  getters
}
