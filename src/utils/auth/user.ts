import { getLocal, removeLocal, setLocal } from '@/utils/storage'

const USER_CODE = 'login_info'
/** token过期时间：6小时 */
const DURATION = 6 * 60 * 60

export function getLoginInfo() {
  return getLocal(USER_CODE)
}

export function setLoginInfo(data: object) {
  setLocal(USER_CODE, JSON.stringify(data), DURATION)
}

export function removeLoginInfo() {
  removeLocal(USER_CODE)
}
