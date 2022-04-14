/*
 * @Author: kejie
 * @Date: 2022-04-13 14:39:54
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 18:07:20
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseIcon\index.ts
 * @Description: file content
 */
import { App } from 'vue';
import ChooseIcon from './src/index.vue'

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('choose-icon', ChooseIcon)
  }
}