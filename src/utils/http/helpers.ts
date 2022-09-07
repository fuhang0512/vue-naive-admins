const WITHOUT_TOKEN_API = [{ url: '/oauth/token/password', method: 'POST' }]

export function isWithoutToken({ url = '', method = '' }) {
  return WITHOUT_TOKEN_API.some(item => item.url === url && item.method === method.toUpperCase())
}

