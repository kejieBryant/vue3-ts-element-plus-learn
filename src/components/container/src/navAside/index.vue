<!--
 * @Author: kejie
 * @Date: 2022-04-13 11:38:45
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 13:57:38
 * @FilePath: \m-comp\src\components\container\src\navAside\index.vue
 * @Description: file content
-->
<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-document />
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-setting />
      <template #title>趋势感知</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>