<!--
 * @Description: 
 * @Author: FuHang
 * @Date: 2022-09-06 20:20:39
 * @LastEditTime: 2022-09-12 23:21:00
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom\CustomIcon.vue
-->
<script setup lang="ts">
// renderCustomIcon,
import { renderIcon } from "@/utils/common";

interface Props {
  /** 图标名称(图片的文件名) */
  icon: string;
  color?: string;
  size?: number;
}
const props = withDefaults(defineProps<Props>(), {
  size: 14,
});

const iconCom = computed(() => renderIcon(props.icon, props));
</script>

<template>
  <component :is="iconCom" />
</template>
