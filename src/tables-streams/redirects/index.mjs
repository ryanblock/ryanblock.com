import useragent from 'useragent'

const PUSHOVER_URL = 'https://api.pushover.net/1/messages.json'

export async function handler ({ Records = [] }) {
  for (let record of Records) {
    if (record.eventName !== 'INSERT') continue

    let item = record.dynamodb?.NewImage
    if (item?.ref?.S !== 'crag') continue

    try {
      await notify(item)
    }
    catch (err) {
      console.error('Pushover notify failed', err)
    }
  }
}

async function notify (item) {
  let { PUSHOVER_TOKEN, PUSHOVER_USER } = process.env
  if (!PUSHOVER_TOKEN || !PUSHOVER_USER) {
    console.error('Missing PUSHOVER_TOKEN or PUSHOVER_USER env vars')
    return
  }

  let request = JSON.parse(item.request?.S || '{}')
  let ip = request?.http?.sourceIp || 'unknown'
  let ua = request?.http?.userAgent || ''

  let agent = useragent.parse(ua)
  let osVer = [ agent.os.major, agent.os.minor, agent.os.patch ].filter(Boolean).join('.')
  let brVer = [ agent.major, agent.minor, agent.patch ].filter(Boolean).join('.')
  let osStr = [ agent.os.family, osVer ].filter(Boolean).join(' ') || 'Unknown OS'
  let brStr = [ agent.family, brVer ].filter(Boolean).join(' ') || 'Unknown browser'

  let message = [
    'New visitor to the crag!',
    `- ${formatPT(item.ts?.S)}`,
    `- ${osStr} ${brStr}`,
    `- IP ${ip}`,
  ].join('\n')

  let body = new URLSearchParams({
    token: PUSHOVER_TOKEN,
    user: PUSHOVER_USER,
    message,
  })

  let res = await fetch(PUSHOVER_URL, { method: 'POST', body })
  if (!res.ok) {
    let text = await res.text()
    throw Error(`Pushover ${res.status}: ${text}`)
  }
}

function formatPT (iso) {
  let date = iso ? new Date(iso) : new Date()
  let parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).formatToParts(date)
  let p = Object.fromEntries(parts.map(({ type, value }) => [ type, value ]))
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second} ${p.dayPeriod} PT`
}
