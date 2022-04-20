/*
 * @Author: kejie
 * @Date: 2022-04-20 14:59:02
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-20 15:12:27
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseDate\index.ts
 * @Description: 开始和结束日期选择器组件
 */
import { App } from 'vue';
import ChooseDate from './src/index.vue'

export default {
  // 暴露出install方法，供Vue.use()来全局注册该组件
  install(app: App) {
    app.component('choose-date', ChooseDate)
  }
}