import { App } from 'vue';
import Progress from './src/index.vue'

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('m-progress', Progress)
  }
}