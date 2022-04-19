<!--
 * @Author: kejie
 * @Date: 2022-04-18 15:35:31
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-19 15:58:49
 * @FilePath: \vue3-ts-element-plus-learn\src\components\menu\src\index.vue
 * @Description: 最多只有两层的菜单
-->
<template>
  <div class="menu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :router="router"
      v-bind="$attrs"
    >
      <template v-for="(item, i) in data" :key="i">
        <!-- 只有一级的菜单 -->
        <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
          <component v-if="item[icon]" :is="`el-icon${toLine(item[icon])}`"></component>
          <template #title>{{item[name]}}</template>
        </el-menu-item>
        <!-- 二级菜单 -->
        <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
          <template #title>
            <component v-if="item[icon]" :is="`el-icon${toLine(item[icon])}`"></component>
            <span>{{item[name]}}</span>
          </template>
          <el-menu-item v-for="(item1, i1) in item[children]" :index="item1[index]" :key="i1">
            <component v-if="item1[icon]" :is="`el-icon${toLine(item1[icon])}`"></component>
            <template #title>{{item1[name]}}</template>
        </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang='ts' setup>
import { PropType, useAttrs } from 'vue';
import { toLine } from '../../../utils/index'

defineProps({
  data: {
    type: Array as PropType<any[]>,
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
  // 增加代码的健壮性，因为后端返回的数据，使用的属性名不一定是icon、index、name、children这一套
  icon: {
    type: String,
    default: 'icon'
  },
  index: {
    type: String,
    default: 'index'
  },
  name: {
    type: String,
    default: 'name'
  },
  children: {
    type: String,
    default: 'children'
  }
})

// 可以取到父组件中传入的且在子组件中没有使用props接收的属性
const attrs = useAttrs();
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
svg {
  margin-right: 8px;
  height: 1em;
  width: 1em;
}
</style>