/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-06 20:20:39
 * @LastEditTime: 2022-09-12 23:19:33
 * @LastEditors:
 * @FilePath: \vue-naive-admin\src\utils\common\icon.ts
 */
import { h } from "vue";
import { Icon } from "@iconify/vue";
import { NIcon } from "naive-ui";
import SvgIcon from "@/components/custom/SvgIcon.vue";

interface Props {
  size?: number;
  color?: string;
}

export function renderIcon(icon: string, props: Props = { size: 12 }) {
  console.log(props);

  return () => h(NIcon, props, { default: () => h(Icon, { icon }) });
}

export function renderCustomIcon(icon: string, props: Props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(SvgIcon, { icon }) });
}
