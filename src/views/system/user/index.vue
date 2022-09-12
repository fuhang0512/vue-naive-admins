<!--
 * @Description: 
 * @Author: FuHang
 * @Date: 2022-09-08 19:46:50
 * @LastEditTime: 2022-09-12 23:17:12
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\views\system\user\index.vue
-->
<template>
  <div>
    <custom-table
      :columns="columns"
      :data="tableData"
      title="用户管理"
    ></custom-table>
    <n-button @click="handleClickIsPushColumns">测试</n-button>
  </div>
</template>

<script setup lang="tsx">
import { NButton, NPopconfirm, NSpace } from "naive-ui";
import customTable from "@/components/custom/custom-table/index.vue";
import { ApiUser } from "@/api/index";

const columns = ref([
  {
    title: "用户名",
    key: "username",
  },
  {
    title: "昵称",
    key: "nickname",
  },
  {
    title: "头像",
    key: "avatarUrl",
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

const tableData = ref([]);

const handleClickIsPushColumns = () => {
  columns.value.push({
    title: "联系方式",
    key: "phone",
  });
};

const handleEditTable = (id: any) => {
  console.log("handleEditTable");
};
const handleDeleteTable = (id: any) => {
  console.log("handleDeleteTable");
};

const pages = ref({
  current: 1,
  size: 10,
  total: 0,
});

const getPageList = async () => {
  const res: any = await ApiUser.getPaginationList(
    Object.assign({
      current: pages.value.current,
      size: pages.value.size,
    })
  );
  if (res?.code !== 200) {
    return console.log("报错了");
  }
  tableData.value = res?.data?.records;
};
getPageList();
</script>

<style scoped></style>
