exports.handler = async function route () {
  let env = process.env.NODE_ENV

  if (env === 'production') {
    return {
      headers: {
        'content-type': 'text/plain; charset=utf8'
      },
      body:
`User-agent: *
Disallow: `
    }
  }
  else {
    return {
      headers: {
        'content-type': 'text/plain; charset=utf8'
      },
      body:
`User-agent: *
Disallow: /`
    }
  }
}
