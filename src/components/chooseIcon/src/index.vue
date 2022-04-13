<!--
 * @Author: kejie
 * @Date: 2022-04-13 14:39:20
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 15:52:07
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseIcon\src\index.vue
 * @Description: file content
-->
<template>
  <el-button @click="chooseIcon" :type="btnType">
    <slot>选择图标</slot>
  </el-button>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
  >
  </el-dialog>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

let props = defineProps<{
  btnType: string,
  title: string,
  visible: boolean
}>()
let dialogVisible = ref<boolean>(props.visible)
let chooseIcon = () => {

}
</script>

<style lang='scss' scoped>
</style>