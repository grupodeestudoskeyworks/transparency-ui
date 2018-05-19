import mutations from '@/store/modules/auth/mutations'
import { REGISTERED } from '@/store/modules/auth/mutation-types'

describe(`/store/modules/auth/mutations`, () => {
  describe(`registered`, () => {
    const now = new Date()
    let clock, sandbox

    beforeEach(() => {
      sandbox = sinon.sandbox.create()
      clock = sinon.useFakeTimers(now.getTime())
    })

    afterEach(() => {
      sandbox.restore()
      clock.restore()
    })

    it(`adds response info when it doesn't exist`, () => {
      const state = {
        expireDate: null,
        accessToken: null,
        user: null
      }
      const expireDate = Date.now() + 3600
      const user = { name: 'foo', lastName: 'bar', username: 'foobar', email: 'foo@bar.com' }
      const accessToken = 'token'

      mutations[REGISTERED](state, {
        user, accessToken, expireDate
      })

      expect(state.user).to.equal(user)
      expect(state.accessToken).to.equal(accessToken)
      expect(state.expireDate).to.equal(expireDate)
    })

    it(`overwrites response info when it already exists`, () => {
      const state = {
        expireDate: Date.now() + 3600,
        accessToken: 'token',
        user: { name: 'foo', lastName: 'bar', username: 'foobar', email: 'foo@bar.com' }
      }
      const user = { name: 'antoher-foo', lastName: 'antoher-bar', username: 'antoher-foobar', email: 'antoher-foo@bar.com' }
      const accessToken = 'antoher-token'
      const expireDate = Date.now() + 7200

      mutations[REGISTERED](state, {
        user, accessToken, expireDate
      })

      expect(state.user).to.equal(user)
      expect(state.accessToken).to.equal(accessToken)
      expect(state.expireDate).to.equal(expireDate)
    })
  })
})
