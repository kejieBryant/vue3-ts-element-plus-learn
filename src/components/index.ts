/*
 * @Author: kejie
 * @Date: 2022-04-14 18:07:39
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 18:10:05
 * @FilePath: \vue3-ts-element-plus-learn\src\components\index.ts
 * @Description: file content
 */
import { App } from 'vue'
import ChooseArea from './chooseArea'
import chooseIcon from './chooseIcon'

const components = [
  ChooseArea,
  chooseIcon
]

export default {
  install(app: App) {
    components.forEach((component) => {
      // 因为组件都提供了install方法，所以可以通过use来注册
      app.use(component)
    })
  }
}