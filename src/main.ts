import router from "@/router";
import "lib-flexible";
import { ConfigProvider } from "vant";
import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./store"
import "./assets/css/index.less";
import { Toast } from 'vant';
const app = createApp(App);

app.use(ConfigProvider);
app.use(pinia);
app.use(Toast);
app.use(router);


router.isReady();

app.mount("#root");

export default app;
