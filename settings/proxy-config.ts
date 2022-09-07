const proxyConfigMappings: Record<ProxyType, ProxyConfig> = {
  dev: {
    prefix: '/ttsy',
    target: 'http://47.108.48.241:8880/ttsy',
  },
  test: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  prod: {
    prefix: '/',
    target: 'http://47.108.48.241:8880',
  },
}

export function getProxyConfig(envType: ProxyType = 'dev'): ProxyConfig {
  return proxyConfigMappings[envType]
}
