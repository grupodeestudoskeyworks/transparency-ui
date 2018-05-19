import mutations from '@/store/modules/auth/mutations'

const { registered } = mutations

describe(`/store/modules/auth/mutations`, () => {
  describe(`registered`, () => {
    it(`adds response info when it doesn't exist`, () => {
      const state = {
        expiresIn: null,
        token: null,
        user: null
      }
      const user = { name: 'foo', lastName: 'bar', username: 'foobar', email: 'foo@bar.com' }
      const token = 'token'
      const expiresIn = 3600

      registered(state, {
        user, access_token: token, expires_in: expiresIn
      })

      expect(state.user).to.equal(user)
      expect(state.token).to.equal(token)
      expect(state.expiresIn).to.equal(expiresIn)
    })

    it(`overwrites response info when it already exists`, () => {
      const state = {
        expiresIn: 3600,
        token: 'token',
        user: { name: 'foo', lastName: 'bar', username: 'foobar', email: 'foo@bar.com' }
      }
      const user = { name: 'antoher-foo', lastName: 'antoher-bar', username: 'antoher-foobar', email: 'antoher-foo@bar.com' }
      const token = 'antoher-token'
      const expiresIn = 6300

      registered(state, {
        user, access_token: token, expires_in: expiresIn
      })

      expect(state.user).to.equal(user)
      expect(state.token).to.equal(token)
      expect(state.expiresIn).to.equal(expiresIn)
    })
  })
})
