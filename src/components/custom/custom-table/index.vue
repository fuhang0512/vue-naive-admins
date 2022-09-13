<!--
 * @Description: 
 * @Author: FuHang
 * @Date: 2022-09-08 23:04:28
 * @LastEditTime: 2022-09-13 23:37:18
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom\custom-table\index.vue
-->
<template>
  <n-card
    :title="props.title"
    size="small"
    :content-style="{ padding: 0 }"
    class="table-container"
  >
    <template #header-extra>
      <n-space>
        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <div mr-2>
              <n-switch v-model:value="defaultProps.striped" size="small" />
            </div>
          </template>
          斑马纹
        </n-tooltip>

        <n-divider vertical />

        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <n-icon cursor-pointer size="20" @click="handleReloadTableData">
              <icon-ant-design:reload-outlined />
            </n-icon>
          </template>
          刷新
        </n-tooltip>

        <n-dropdown
          trigger="click"
          :options="dropdownOptions"
          @select="handleSelectDropdown"
          v-model:value="defaultProps.size"
        >
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <n-icon cursor-pointer size="20">
                <icon-ant-design:column-height-outlined />
              </n-icon>
            </template>
            密度
          </n-tooltip>
        </n-dropdown>
        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <n-icon cursor-pointer size="20" @click="toggle">
              <icon-ant-design:setting-outlined />
            </n-icon>
          </template>
          列设置
        </n-tooltip>

        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <n-icon cursor-pointer size="20" @click="toggle">
              <icon-ant-design:fullscreen-exit-outlined v-if="isFullscreen" />
              <icon-ant-design:fullscreen-outlined v-else />
            </n-icon>
          </template>
          {{ isFullscreen ? "退出全屏" : "进入全屏" }}
        </n-tooltip>
      </n-space>
    </template>
    <n-data-table
      :columns="props.columns"
      :data="props.data"
      v-bind="getBindValues"
    />
  </n-card>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";

interface Props {
  columns: Array<Object>;
  data?: Array<Object>;
  title?: String;
  loading?: Boolean;
  striped?: Boolean;
}
const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  data: () => [],
  loading: () => false,
  striped: () => false,
});
console.log(props);
console.log(props.striped);

const emit = defineEmits(["page-data"]);
const { isFullscreen, toggle } = useFullscreen();

const defaultProps = reactive({
  striped: props.striped,
  size: "medium",
});

const handleReloadTableData = () => {
  console.log("刷新");
  emit("page-data");
};

const handleSelectDropdown = (val: any) => {
  console.log(val);
  defaultProps.size = val;
};

const dropdownOptions = [
  {
    label: "紧凑",
    key: "small",
  },
  {
    label: "默认",
    key: "medium",
  },
  {
    label: "宽松",
    key: "large",
  },
];
// 组装表格信息
const getBindValues = computed(() => {
  return {
    ...unref(defaultProps),
    // 是否显示 loading 状态 默认 false
    loading: props.loading,
    size: defaultProps.size,
  };
});
// const handleReloadTableData = function () {
//   $dialog.confirm({
//     content: "确认删除？",
//     confirm() {
//       $message.success("删除成功");
//     },
//     cancel() {
//       $message.warning("已取消");
//     },
//   });
// };
</script>

<style scoped lang="scss">
.table-container {
  .n-card-header {
    .n-card-header__extra {
      .n-space {
        > ::v-deep(div) {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
