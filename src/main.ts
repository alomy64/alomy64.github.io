import { createApp } from "vue";
import { Button, List } from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(Button).use(List).mount("#app");
