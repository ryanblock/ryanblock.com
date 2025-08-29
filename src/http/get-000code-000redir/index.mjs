export async function handler (params) {
  let redirects = JSON.parse(process.env.REDIRECTS)
  let { code, redir } = params.pathParameters
  let statusCode = Number(code)

  let isRedir = [ 301, 302 ].includes(statusCode)
  let Location = redirects?.[code]?.[redir]

  if (isRedir && Location) {
    return {
      statusCode: statusCode,
      headers: { Location },
    }
  }
  return {
    statusCode: 302,
    headers: { Location: '/' },
  }
}
