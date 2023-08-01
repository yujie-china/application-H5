import router from "@/router";
import "lib-flexible";
import { ConfigProvider } from "vant";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.less";

const app = createApp(App);

app.use(ConfigProvider);

app.use(router);

router.isReady();

app.mount("#root");

export default app;
