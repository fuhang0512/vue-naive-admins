/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-07 21:04:00
 * @LastEditTime: 2022-09-13 22:01:42
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue-naive-admin\src\main.ts
 */
import "normalize.css";
import "@/styles/index.scss";
import "uno.css";
import "virtual:svg-icons-register";

import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";

const app = createApp(App);

setupStore(app);
setupRouter(app);

app.mount("#app");
