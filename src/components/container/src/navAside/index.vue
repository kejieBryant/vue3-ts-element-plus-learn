<!--
 * @Author: kejie
 * @Date: 2022-04-13 11:38:45
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-20 15:14:41
 * @FilePath: \vue3-ts-element-plus-learn\src\components\container\src\navAside\index.vue
 * @Description: file content
-->
<template>
  <m-menu
    :default-active="$route.path"
    :collapse="collapse"
    router
    :data="data"
  />
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()

const data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Picture',
    name: '图标选择器',
    index: '/iconChoose'
  },
  {
    icon: 'AddLocation',
    name: '省市区选择',
    index: '/areaChoose'
  },
  {
    icon: 'TrendCharts',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Menu',
    name: '菜单',
    index: '/menu'
  },
  {
    icon: 'Timer',
    name: '时间范围选择',
    index: '/timeChoose'
  },
  {
    icon: 'DataLine',
    name: '日期范围选择',
    index: '/dateChoose'
  },
  {
    icon: 'ScaleToOriginal',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'House',
    name: '城市选择',
    index: '/cityChoose'
  },
  {
    icon: 'Calendar',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Platform',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'List',
    name: '表格',
    index: '/table'
  },
]
</script>

<style lang='scss' scoped>
:deep(.el-menu) {
  height: 100%;
}

:deep(svg) {
  height: 1em;
  width: 1em;
}
</style>