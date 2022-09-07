<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { ApiOauth } from '@/api/index'
import AppFooter from '@/components/common/AppFooter.vue'
import { setToken } from '@/utils/auth/token'
import { getLocal, removeLocal, setLocal } from '@/utils/storage'
import bgImg from '@/assets/images/login_bg.webp'
import { encrypt } from '~/src/utils/encrypt'
console.log(ApiOauth)

const title: string = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const route = useRoute()
const query = route.query

interface LoginForm {
  username: string
  password: string
}

const loginForm = ref<LoginForm>({
  username: '',
  password: '',
})

const localLoginForm = getLocal('login_form') as LoginForm
if (localLoginForm) {
  loginForm.value.username = localLoginForm.username || ''
  loginForm.value.password = localLoginForm.password || ''
}

const loading = ref<boolean>(false)
const isRemember = useStorage('isRemember', false)
async function handleLogin() {
  const { username, password } = loginForm.value
  if (!username || !password) {
    window.$message?.warning('请输入用户名和密码')
    return
  }
  try {
    loading.value = true
    let encryptUsername = encrypt(username)
    let encryptPassword = encrypt(password.toString())
    const res: any = await ApiOauth.login({ username: encryptUsername, password: encryptPassword })
    if (res.code === 200) {
      window.$notification?.success({ title: '登录成功！', duration: 2500 })
      setToken(res.data.access_token)
      setLocal('login_info', res.data)
      if (isRemember.value) setLocal('login_form', { username, password })
      else removeLocal('login_form')

      if (query.redirect) {
        const path = query.redirect as string
        Reflect.deleteProperty(query, 'redirect')
        router.push({ path, query })
      } else {
        router.push('/')
      }
    } else {
      window.$message?.warning(res.msg || '登录失败')
    }
  } catch (error: any) {
    window.$message?.error(error.msg || '登录失败')
  }
  loading.value = false
}

// (val:boolean) => (isRemember = val)
const handleUpdateChecked = (val: boolean) => {
  isRemember.value = val
}
</script>

<template>
  <div class="cus-scroll h-full py-15 flex-col overflow-auto bg-cover" :style="{ backgroundImage: `url(${bgImg})` }">
    <div m-auto p-15 f-c-c min-w-345 rounded-10 card-shadow bg-white dark:bg-dark bg-opacity-60>
      <div w-380 hidden md:block px-20 py-35>
        <img src="@/assets/images/login_banner.webp" w-full alt="login_banner" />
      </div>

      <div w-320 flex-col px-20 py-35>
        <h5 f-c-c text-24 font-normal color="#6a6a6a"><icon-custom-logo mr-30 text-50 color-primary />{{ title }}</h5>
        <div mt-30>
          <n-input
            v-model:value="loginForm.username"
            autofocus
            class="text-16 items-center h-50 pl-10"
            placeholder="admin"
            :maxlength="20"
          />
        </div>
        <div mt-30>
          <n-input
            v-model:value="loginForm.password"
            class="text-16 items-center h-50 pl-10"
            type="password"
            show-password-on="mousedown"
            placeholder="123456"
            :maxlength="20"
            @keydown.enter="handleLogin"
          />
        </div>

        <div mt-20>
          <n-checkbox :checked="isRemember" label="记住我" :on-update:checked="handleUpdateChecked" />
        </div>

        <div mt-20>
          <n-button w-full h-50 rounded-5 text-16 type="primary" :loading="loading" @click="handleLogin">
            登录
          </n-button>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
