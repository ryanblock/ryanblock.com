let pageHTML = require('@architect/views/page-html')
let contents = require('./_contents')

exports.handler = async function route(req) {
  if (process.env.NODE_ENV !== 'production') console.log(req)
  return {
    type: 'text/html; charset=utf8',
    body: pageHTML(contents)
  }
}
