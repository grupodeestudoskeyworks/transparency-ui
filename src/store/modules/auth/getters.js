import { LOGGEDIN, LOGGEDOFF, EXPIRED } from '@/constants/auth/status'

export default {
  status (state) {
    const { accessToken, expireDate, user } = state

    if (!accessToken || !user) {
      return LOGGEDOFF
    }

    if (expireDate <= Date.now()) {
      return EXPIRED
    }

    return LOGGEDIN
  }
}
