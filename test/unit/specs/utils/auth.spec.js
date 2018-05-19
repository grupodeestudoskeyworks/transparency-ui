import authStorage from '@/utils/auth-storage'

describe(`/utils/auth`, () => {
  it(`sets and gets payload`, () => {
    const payload = {
      accessToken: '',
      expireDate: Date.now(),
      user: {
        firstName: 'foo',
        lastName: 'bar',
        email: 'foo@bar.com',
        username: 'foobar'
      }
    }

    authStorage.set(payload)
    expect(authStorage.get()).to.deep.equal(payload)
  })
})
