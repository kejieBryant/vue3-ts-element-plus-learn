
/*
* @Author: kejie
* @Date: 2022-04-19 11:16:15
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-19 15:27:32
 * @FilePath: \vue3-ts-element-plus-learn\src\components\menu\infiniteMenu.tsx
* @Description: 无限层级菜单，需要递归数据，使用tsx实现组件
*/
import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from './types'
import './css/index.scss'
import * as Icons from "@element-plus/icons-vue"

export default defineComponent({
  name: 'InfiniteMenu',
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true
    },
    defaultActive: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const infiniteMenuStyle = 'infinite-menu'
    const attrs = useAttrs()
    const renderMenuItem = (menuList: MenuItem[]) => {
      return menuList.map((item: MenuItem) => {
        item.i = (Icons as any)[item.icon!]
        // 处理插槽
        let slots = {
          title: () => {
            return <>
              <item.i />
              <span>{item.name}</span>
            </>
          }
        }
        // 递归处理有子菜单的菜单项
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenuItem(item.children)}
            </el-sub-menu>
          )
        }
        // 处理没有子菜单的菜单项
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    return () => {
      return (
        <el-menu class={infiniteMenuStyle} {...attrs} default-active={props.defaultActive} router={props.router}>
          {renderMenuItem(props.data)}
        </el-menu>
      )
    }
  }
})