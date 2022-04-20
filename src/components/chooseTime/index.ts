/*
 * @Author: kejie
 * @Date: 2022-04-20 14:56:29
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-20 14:58:06
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseTime\index.ts
 * @Description: 开始时间和结束时间选择器组件
 */
import { App } from 'vue';
import ChooseTime from './src/index.vue'

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('choose-time', ChooseTime)
  }
}