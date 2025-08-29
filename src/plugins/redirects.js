let rawRedirects = require('./redirect-list.js')
let REDIRECTS = JSON.stringify(rawRedirects)

module.exports = {
  set: {
    env () {
      return { REDIRECTS }
    },
  },
}
