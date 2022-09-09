/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-08 22:41:19
 * @LastEditTime: 2022-09-08 22:47:55
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\components\custom\CustomIcon.tsx
 */
import { NIcon } from "naive-ui";
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  props: {
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: 14,
    },
  },
  setup(props: any) {
    return () => (
      <NIcon component={h(Icon, { icon: props.icon })} size={props.size} />
    );
  },
});
