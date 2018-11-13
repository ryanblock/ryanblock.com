let env = process.env.NODE_ENV

exports.handler = async function route(req) {
  if (env !== 'production') console.log(req)
  if (env === 'production') {
    return {
      type: 'text/plain; charset=utf8',
      body:
`User-agent: *
Disallow: `
    }
  }
  else {
    return {
      type: 'text/plain; charset=utf8',
      body:
`User-agent: *
Disallow: /`
    }
  }
}
