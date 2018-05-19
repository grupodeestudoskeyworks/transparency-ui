import { REGISTERED } from './mutation-types'

export default {
  [REGISTERED] (state, payload) {
    state.expireDate = payload.expireDate
    state.accessToken = payload.accessToken
    state.user = payload.user
  }
}
