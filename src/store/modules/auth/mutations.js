import { REGISTERED } from './mutation-types'

export default {
  [REGISTERED] (state, payload) {
    state.expiresIn = payload.expires_in
    state.token = payload.access_token
    state.user = payload.user
  }
}
