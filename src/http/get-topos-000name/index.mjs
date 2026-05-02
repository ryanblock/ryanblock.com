import arc from '@architect/functions'
import { createHash } from 'node:crypto'
let statusCode = 302

export async function handler (params) {
  let redirects = JSON.parse(process.env.REDIRECTS)
  let { name } = params.pathParameters
  let ref = params?.queryStringParameters?.ref

  let Location = redirects?.[name]

  if (Location) {
    try {
      let db = await arc.tables()
      let request = JSON.stringify(params.requestContext, null, 2)
      let id = createHash('sha256').update(request).digest('hex')

      let item = {
        id,
        ts: new Date().toISOString(),
        request,
        name,
      }
      if (ref) item.ref = ref
      await db.redirects.put(item)
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
