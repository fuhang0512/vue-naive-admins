/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-08 15:11:07
 * @LastEditTime: 2022-09-08 23:03:30
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom-table\index.tsx
 */
import { NButton, NCard, NDataTable, NSpace } from "naive-ui";
import { defineComponent, ref } from "vue";
import { renderIcon } from "~/src/utils/common/icon";
import CustomIcon from "@/components/custom/CustomIcon";
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
    title: String,
  },
  setup(props: any) {
    const str = ref<string>("tsx的使用");
    const clickFunc1 = () => {
      console.log("没有参数");
    };
    const clickFunc2 = (msg: string = "默认值") => {
      console.log(msg);
      console.log(props);
    };
    return () => (
      <div>
        <div class="table-header flex justify-between items-center">
          <div class="table-header-title text-8xl leading-loose">
            {props.title}
          </div>
          <div class="table-header-action">
            <div class="action-button"></div>
            <div class="action-default">
              <NSpace>
                <CustomIcon icon="ant-design:reload-outlined" size="20" />
                <CustomIcon
                  icon="ant-design:column-height-outlined"
                  size="20"
                />
                <CustomIcon icon="ant-design:setting-outlined" size="20" />
                <CustomIcon icon="ant-design:fullscreen-outlined" size="20" />
                <CustomIcon
                  icon="ant-design:fullscreen-exit-outlined"
                  size="20"
                />
              </NSpace>
            </div>
          </div>
        </div>
        {/* <div class="async">{str.value}</div>
        <NButton onClick={clickFunc1} type="info">
          不传参数点击
        </NButton>
        <button onClick={() => clickFunc2("额外参数")}>传参数点击</button> */}
        <NDataTable columns={props.columns} data={props.data} />
      </div>
    );
  },
});
