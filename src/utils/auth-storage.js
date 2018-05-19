export default {
  set (obj) {
    localStorage.setItem('authInfo', obj)
  },
  get () {
    try {
      const json = localStorage.getItem('authInfo')
      return json ? JSON.parse(json) : {}
    } catch (error) {
      return {}
    }
  }
}
