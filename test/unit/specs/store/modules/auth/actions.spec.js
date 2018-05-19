import { REGISTERED } from '@/store/modules/auth/mutation-types'

/* eslint-disable import/no-webpack-loader-syntax */
const actionsInjector = require('inject-loader!@/store/modules/auth/actions')

const actions = actionsInjector({
  '@/api/auth': {
    register (user) {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            user: {
              firstName: 'foo',
              lastName: 'bar',
              email: 'foo@bar.com',
              username: 'foobar'
            },
            accessToken: 'token',
            expiresIn: 3600
          }
        })
      })
    }
  }
})

describe(`/store/modules/auth/actions`, () => {
  it(`register`, async () => {
    const commit = sinon.spy()
    const state = {}

    await actions.register({ commit, state }, {
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@bar.com',
      username: 'foobar',
      password: '123'
    })

    expect(commit.args).to.deep.equal([
      [REGISTERED, {
        user: {
          firstName: 'foo',
          lastName: 'bar',
          email: 'foo@bar.com',
          username: 'foobar'
        },
        accessToken: 'token',
        expiresIn: 3600
      }]
    ])
  })
})
