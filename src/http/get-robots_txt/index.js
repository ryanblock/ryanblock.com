let arc = require('@architect/functions')

let env = process.env.NODE_ENV

function route(req, res) {
  if (env !== 'production') console.log(req)
  if (env === 'production') {
    res({
      text:
`User-agent: *
Disallow: `
    })
  }
  else {
    res({
      text:
`User-agent: *
Disallow: /`
    })
  }
}

exports.handler = arc.http(route)
