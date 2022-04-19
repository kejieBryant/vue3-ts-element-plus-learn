/*
 * @Author: kejie
 * @Date: 2022-04-18 15:35:44
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-19 11:36:19
 * @FilePath: \vue3-ts-element-plus-learn\src\components\menu\index.ts
 * @Description: file content
 */
import { App } from 'vue';
import Menu from './src/index.vue'
import InfiniteMenu from './infiniteMenu';

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('m-menu', Menu)
    app.component('infinite-menu', InfiniteMenu)
  }
}