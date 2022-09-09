<!--
 * @Description: 
 * @Author: FuHang
 * @Date: 2022-09-08 23:04:28
 * @LastEditTime: 2022-09-08 23:36:14
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom-table\index.vue
-->
<template>
  <n-card :title="props.title" size="small" :content-style="{ padding: 0 }">
    <template #header-extra>
      <n-space>
        <!-- <icon-ant-design:reload-outlined />
        <icon-ant-design:column-height-outlined />
        <icon-ant-design:setting-outlined /> -->
        <CustomIcon
          icon="ant-design:reload-outlined"
          size="20"
          @click="handleReloadTableData"
        />
        <CustomIcon icon="ant-design:column-height-outlined" size="20" />
        <CustomIcon icon="ant-design:setting-outlined" size="20" />
        <n-icon cursor-pointer size="20" @click="toggle">
          <icon-ant-design:fullscreen-exit-outlined v-if="isFullscreen" />
          <icon-ant-design:fullscreen-outlined v-else />
        </n-icon>
      </n-space>
    </template>
    <n-data-table :columns="props.columns" :data="props.data" />
  </n-card>
</template>

<script setup lang="ts">
import CustomIcon from "@/components/custom/CustomIcon";
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, toggle } = useFullscreen();
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  title: String,
});

const handleReloadTableData = () => {
  console.log("刷新");
};
</script>

<style scoped></style>
