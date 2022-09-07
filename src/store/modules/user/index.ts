import { getLocal } from '@/utils/storage'
import { defineStore } from 'pinia'
import { removeToken } from '@/utils/auth/token'
import { toLogin } from '@/utils/auth/router'
import { ApiUser } from '@/api/index'

interface UserInfo {
  id?: string
  username?: string
  avatarUrl?: string
  role?: Array<string>
}

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: <UserInfo>{},
    }
  },
  getters: {
    userId(): string {
      return this.userInfo.id || ''
    },
    name(): string {
      return this.userInfo.username || ''
    },
    avatar(): string {
      return this.userInfo.avatarUrl || ''
    },
    role(): Array<string> {
      return this.userInfo.role || []
    },
  },
  actions: {
    async getUserInfo() {
      try {
        const { user_id }: any = getLocal('login_info')
        const res: any = await ApiUser.getSysUserInfo(user_id)
        if (res.code === 200) {
          const { id, username, avatarUrl, role } = res.data
          this.userInfo = { id, username, avatarUrl, role }
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      removeToken()
      this.userInfo = {}
      toLogin()
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
