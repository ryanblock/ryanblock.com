let arc = require('@architect/functions')
let pageHTML = require('@architect/views/page-html')
let contents = require('./_contents')

function route(req, res) {
  if (process.env.NODE_ENV !== 'production') console.log(req)
  res({
    status: 404,
    html: pageHTML(contents)
  })
}

exports.handler = arc.http(route)
