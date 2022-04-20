<!--
 * @Author: kejie
 * @Date: 2022-04-20 15:02:49
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-20 16:43:39
 * @FilePath: \vue3-ts-element-plus-learn\src\views\TimeChoose\index.vue
 * @Description: file content
-->
<template>
  <div>
    <choose-time
      @startTimeChange="startTimeChange"
      @endTimeChange="endTimeChange"
      :startOptions="startOptions"
      startStep="00:15"
    />
  </div>
</template>

<script lang='ts' setup>
import { TimeRange } from '../../types'

const startTimeChange = (val: string) => {
  console.log('startTimeChange: ', val)
}
const endTimeChange = (val: TimeRange) => {
  console.log('endTimeChange: ', val)
}

const startOptions = {
  'prefix-icon': 'el-icon-timer'
}
</script>

<style lang='scss' scoped>
</style>