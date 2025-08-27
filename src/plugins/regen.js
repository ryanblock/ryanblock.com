let writeTheWholeEntireWebPage = require('../../scripts/static-site-generator')
module.exports = {
  deploy: {
    start: () => {
      writeTheWholeEntireWebPage()
    },
  },
  sandbox: {
    watcher: ({ filename }) => {
      if (!filename.includes('public')) {
        writeTheWholeEntireWebPage()
      }
    },
  },
}
