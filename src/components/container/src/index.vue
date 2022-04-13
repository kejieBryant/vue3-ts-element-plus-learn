<!--
 * @Author: kejie
 * @Date: 2022-04-13 11:05:41
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 13:59:56
 * @FilePath: \m-comp\src\components\container\src\index.vue
 * @Description: file content
-->
<template>
  <el-container>
    <nav-aside :collapse="isCollapse"></nav-aside>
    <el-container class="right-content">
      <nav-header v-model:collapse="isCollapse"></nav-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import NavAside from './navAside/index.vue';
import NavHeader from './navHeader/index.vue'

let isCollapse = ref(false);
</script>

<style lang='scss' scoped>
.right-content {
  display: flex;
  flex-direction: column;
}
</style>