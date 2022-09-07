<script setup lang="ts">
import AppProvider from "@/components/common/AppProvider.vue";
import { zhCN, dateZhCN } from "naive-ui";
import { useThemeStore } from "@/store";
const themeStore = useThemeStore();
</script>

<template>
  <!-- <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    wh-full
    :theme-overrides="themeStore.naiveThemeOverrides"
    :theme="themeStore.naiveTheme"
  > -->
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
  <!-- </n-config-provider> -->
</template>
