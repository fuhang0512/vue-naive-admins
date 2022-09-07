<template>
  <n-data-table :columns="props.columns" :data="props.data" :bordered="false" />
</template>

<script setup lang="ts">
import { h } from "vue";
// import { NButton } from "naive-ui";
// import type { DataTableColumns } from "naive-ui";

const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped></style>
