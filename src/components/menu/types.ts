/*
 * @Author: kejie
 * @Date: 2022-04-18 15:46:38
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-19 14:56:38
 * @FilePath: \vue3-ts-element-plus-learn\src\components\menu\types.ts
 * @Description: file content
 */
// 菜单项接口
export interface MenuItem {
  // 菜单图标
  icon?: string,
  // 处理后的菜单图标组件
  i: any,
  // 菜单唯一标识
  index: string,
  // 菜单名称
  name: string,
  children?: MenuItem[]
}