import arc from '@architect/functions'
import { createHash } from 'node:crypto'
let statusCode = 302

export async function handler (params) {
  let redirects = JSON.parse(process.env.REDIRECTS)
  let { redir } = params.pathParameters

  let Location = redirects?.[redir]

  if (Location) {
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
      statusCode,
      headers: { Location },
    }
  }
  return {
    statusCode,
    headers: { Location: '/' },
  }
}
