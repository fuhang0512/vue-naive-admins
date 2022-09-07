import CryptoJS from 'crypto-js'

// 秘钥，必须由16位字符组成
const secretKey = 'uM%ijicLENaui0NV'

/**
 * 前端账号密码加密
 */
function encrypt(content: string) {
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const srcs = CryptoJS.enc.Utf8.parse(content)
  const encryptRes = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encryptRes.toString()
}

/**
 * 前端账号密码解密，暂不需要
 */
function decrypt(encryptStr: string) {
  const key = CryptoJS.enc.Utf8.parse(secretKey)

  const decryptRes = CryptoJS.AES.decrypt(encryptStr, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return CryptoJS.enc.Utf8.stringify(decryptRes).toString()
}

export { encrypt, decrypt }
