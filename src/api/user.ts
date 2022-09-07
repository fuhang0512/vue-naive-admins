import request from '@/utils/http'

const getSysUserInfo = (id: string) => request.get(`/sysuser/info/${id}`)

export { getSysUserInfo }

// export function getSysUserInfo(id: string) {
//   return request.get(`/sysuser/info/${id}`)
// }
