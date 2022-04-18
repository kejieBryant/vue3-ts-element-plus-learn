/*
 * @Author: kejie
 * @Date: 2022-04-18 15:35:44
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-18 15:44:09
 * @FilePath: \vue3-ts-element-plus-learn\src\components\menu\index.ts
 * @Description: file content
 */
import { App } from 'vue';
import Menu from './src/index.vue'

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('m-menu', Menu)
  }
}