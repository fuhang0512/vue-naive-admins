<script setup lang="ts">
const { replace } = useRouter();
</script>
<template>
  <n-result
    status="500"
    title="500 服务器错误"
    description="服务器出错可能说明该雇更多程序员了"
  >
    <template #footer>
      <n-button @click="replace('/')">返回首页</n-button>
    </template>
  </n-result>
</template>
