export default {
  set (obj) {
    localStorage.setItem('authInfo', obj)
  },
  get () {
    try {
      let json = localStorage.getItem('auth')
      return typeof json === 'string' ? JSON.parse(json) : {}
    } catch (error) {
      return {}
    }
  }
}
