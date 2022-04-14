/*
 * @Author: kejie
 * @Date: 2022-04-14 14:15:03
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 18:07:00
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseArea\index.ts
 * @Description: file content
 */
import { App } from 'vue';
import ChooseArea from './src/index.vue'

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('choose-area', ChooseArea)
  }
}