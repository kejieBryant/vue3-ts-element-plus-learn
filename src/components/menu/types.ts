/*
 * @Author: kejie
 * @Date: 2022-04-18 15:46:38
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-18 16:00:16
 * @FilePath: \vue3-ts-element-plus-learn\src\components\menu\types.ts
 * @Description: file content
 */
// 菜单项接口
export interface MenuItem {
  // 菜单图标
  icon?: String,
  // 菜单唯一标识
  index: String,
  // 菜单名称
  name: String,
  children?: MenuItem[]
}