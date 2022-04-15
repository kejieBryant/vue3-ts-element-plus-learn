/*
 * @Author: kejie
 * @Date: 2022-04-15 09:56:36
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-15 09:59:13
 * @FilePath: \vue3-ts-element-plus-learn\src\components\trend\index.ts
 * @Description: file content
 */
import Trend from './src/index.vue'
import { App } from 'vue'

export default {
  install(app: App) {
    app.component('trend', Trend);
  }
}