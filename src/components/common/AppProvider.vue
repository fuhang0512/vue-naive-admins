<!--
 * @Description: 
 * @Author: FuHang
 * @Date: 2022-09-06 20:20:39
 * @LastEditTime: 2022-09-13 20:49:20
 * @LastEditors: 
 * @FilePath: \vue-naive-admin\src\components\common\AppProvider.vue
-->
<script setup lang="ts">
import { kebabCase } from "lodash-es";
import {
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from "naive-ui";
import { useCssVar } from "@vueuse/core";
import type { GlobalThemeOverrides } from "naive-ui";
// import { zhCN, dateZhCN } from "naive-ui";
import { useThemeStore } from "@/store";
import { zhCN, dateZhCN } from "naive-ui";
import { setupDialog } from "~/src/utils/common/naiveTools";
// 挂载naive组件的方法至window, 以便在全局使用
function setupNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$message = useMessage();
  window.$dialog = setupDialog(useDialog());
  window.$notification = useNotification();
}

const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools();
  },
  render() {
    return h("div");
  },
});

const themStore = useThemeStore();

type ThemeVars = Exclude<GlobalThemeOverrides["common"], undefined>;
type ThemeVarsKeys = keyof ThemeVars;

watch(
  () => themStore.naiveThemeOverrides.common,
  (common) => {
    for (const key in common) {
      useCssVar(`--${kebabCase(key)}`, document.documentElement).value =
        common[key as ThemeVarsKeys] || "";
      if (key === "primaryColor")
        window.localStorage.setItem(
          "__THEME_COLOR__",
          common[key as ThemeVarsKeys] || ""
        );
    }
  },
  { immediate: true }
);

watch(
  () => themStore.darkMode,
  (newValue) => {
    if (newValue) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  },
  {
    immediate: true,
  }
);

function handleWindowResize() {
  themStore.setIsMobile(document.body.offsetWidth <= 640);
}
onMounted(() => {
  handleWindowResize();
  window.addEventListener("resize", handleWindowResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleWindowResize);
});
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    wh-full
    :theme-overrides="themStore.naiveThemeOverrides"
    :theme="themStore.naiveTheme"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot />
            <naive-provider-content />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
