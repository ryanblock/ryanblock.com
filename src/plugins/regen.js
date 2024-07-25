let writeTheWholeEntireWebPage = require('../../scripts/static-site-generator')
module.exports = {
  sandbox: {
    watcher: ({ filename }) => {
      if (!filename.includes('public')) {
        writeTheWholeEntireWebPage()
      }
    }
  }
}
