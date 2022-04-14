<!--
 * @Author: kejie
 * @Date: 2022-04-14 14:16:10
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 15:06:21
 * @FilePath: \vue3-ts-element-plus-learn\src\views\AreaChoose\index.vue
 * @Description: file content
-->
<template>
  <choose-area @change="change" />
</template>

<script lang='ts' setup>
import ChooseArea from '../../components/chooseArea/src/index.vue'

const change = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>