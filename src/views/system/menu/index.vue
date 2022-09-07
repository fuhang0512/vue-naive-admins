<template>
  <div>
    <basic-table :columns="columns" :data="tableData"></basic-table>
    <n-button @click="handleClickIsPushColumns">测试</n-button>
  </div>
</template>

<script setup lang="tsx">
import { BasicTable } from "@/components/table/index";
import { NButton, NPopconfirm, NSpace } from "naive-ui";

const columns = ref([
  {
    title: "Nos",
    key: "no",
  },
  {
    title: "Title",
    key: "title",
  },
  {
    title: "Length",
    key: "length",
  },
  {
    title: "操作",
    key: "actions",
    align: "center",
    render: (row: any) => {
      const rowData = JSON.parse(JSON.stringify(row));
      return (
        <NSpace justify={"center"}>
          <NButton size={"small"} onClick={() => handleEditTable(rowData.id)}>
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(rowData.id)}>
            {{
              default: () => "确认删除",
              trigger: () => <NButton size={"small"}>删除</NButton>,
            }}
          </NPopconfirm>
        </NSpace>
      );
    },
  },
]);

const tableData = ref([
  { no: 3, title: "Wonderwall", length: "4:18", test: "1" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48", test: "2" },
  { no: 12, title: "Champagne Supernova", length: "7:27", test: "3" },
]);

const handleClickIsPushColumns = () => {
  columns.value.push({
    title: "test",
    key: "test",
  });
};

const handleEditTable = (id: any) => {
  console.log("handleEditTable");
};
const handleDeleteTable = (id: any) => {
  console.log("handleDeleteTable");
};
</script>

<style scoped></style>
