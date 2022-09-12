/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-07 21:04:00
 * @LastEditTime: 2022-09-12 23:16:47
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\main.ts
 */
import "normalize.css";
import "@/styles/index.scss";
import "uno.css";
import "virtual:svg-icons-register";
import customIcon from "@/components/custom/CustomIcon";

import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";

const app = createApp(App);
app.component("custom-icon", customIcon);

setupStore(app);
setupRouter(app);

app.mount("#app");
