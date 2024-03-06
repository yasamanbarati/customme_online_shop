// ref: https://stackoverflow.com/a/38552302
export function parseJwt(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(char => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  )

  return JSON.parse(jsonPayload)
}

export function getJwtExpirationDate(token: string) {
  const json = parseJwt(token)
  return json?.exp ? new Date(json.exp * 1000) : null
}
