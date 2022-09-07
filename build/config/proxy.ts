import type { ProxyOptions } from 'vite'
import { getProxyConfig } from '../../settings/proxy-config'

export function createViteProxy(isUseProxy = true, proxyType: ProxyType) {
  if (!isUseProxy)
    return undefined

  const proxyConfig = getProxyConfig(proxyType)
  console.log(proxyConfig);
  
  const proxy: Record<string, string | ProxyOptions> = {
    [proxyConfig.prefix]: {
      target: proxyConfig.target,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${proxyConfig.prefix}`), ''),
    },
  }
  return proxy
}
