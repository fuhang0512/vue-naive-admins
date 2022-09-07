import request from '@/utils/http'
// import qs from 'qs'

const login = (data: {}) => request.post('/oauth/token/password', data)
const refreshToken = (data: {}) => request.post('/oauth/refresh_token', data)

export { login, refreshToken }