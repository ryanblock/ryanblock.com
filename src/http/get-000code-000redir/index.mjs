import arc from '@architect/functions'
import { createHash } from 'node:crypto'

export async function handler (params) {
  let redirects = JSON.parse(process.env.REDIRECTS)
  let { code, redir } = params.pathParameters
  let statusCode = Number(code)

  let isRedir = [ 301, 302 ].includes(statusCode)
  let Location = redirects?.[code]?.[redir]

  if (isRedir && Location) {
    try {
      let db = await arc.tables()
      let request = JSON.stringify(params.requestContext, null, 2)
      let id = createHash('sha256').update(request).digest('hex')

      await db.redirects.put({
        id,
        ts: new Date().toISOString(),
        request,
      })
    }
    catch (err) {
      console.error('Error writing request data to db', err)
    }

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
