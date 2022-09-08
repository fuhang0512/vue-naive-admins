/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-08 15:11:07
 * @LastEditTime: 2022-09-08 18:05:36
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom-table\index.tsx
 */
import { NButton, NCard, NDataTable, NSpace } from "naive-ui";
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    columns: {
      type: Array,
      default: [],
    },
    data: {
      type: Array,
      default: [],
    },
  },
  setup(props: any) {
    console.log(props);
    const str = ref<string>("tsx的使用");
    const clickFunc1 = () => {
      console.log("没有参数");
    };
    const clickFunc2 = (msg: string = "默认值") => {
      console.log(msg);
      console.log(props);
    };
    return () => (
      <NCard title="小卡片" size="small" content-style="padding: 0px">
        {/* <div class="async">{str.value}</div>
        <NButton onClick={clickFunc1} type="info">
          不传参数点击
        </NButton>
        <button onClick={() => clickFunc2("额外参数")}>传参数点击</button> */}
        <NDataTable columns={props.columns} data={props.data} />
      </NCard>
    );
  },
});
