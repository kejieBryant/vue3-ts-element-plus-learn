<!--
 * @Author: kejie
 * @Date: 2022-04-18 15:37:33
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-18 16:02:14
 * @FilePath: \vue3-ts-element-plus-learn\src\views\menu\index.vue
 * @Description: file content
-->
<template>
  <m-menu></m-menu>
</template>

<script lang='ts' setup>
import { PropType } from 'vue';
import { MenuItem } from '../../components/menu/types'

let props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    
  }
})
</script>

<style lang='scss' scoped>
</style>