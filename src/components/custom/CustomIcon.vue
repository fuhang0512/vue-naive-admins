<!--
 * @Description: 
 * @Author: FuHang
 * @Date: 2022-09-06 20:20:39
 * @LastEditTime: 2022-09-13 22:02:02
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom\CustomIcon.vue
-->
<script setup lang="ts">
// renderCustomIcon,
import { renderCustomIcon } from "@/utils/common";

interface Props {
  /** 图标名称(图片的文件名) */
  icon: string;
  color?: string;
  size?: number;
}
const props = withDefaults(defineProps<Props>(), {
  size: 14,
});

const iconCom = computed(() => renderCustomIcon(props.icon, props));
</script>

<template>
  <component :is="iconCom" />
</template>
