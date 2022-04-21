<!--
 * @Author: kejie
 * @Date: 2022-04-20 15:03:12
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-21 10:37:34
 * @FilePath: \vue3-ts-element-plus-learn\src\views\DateChoose\index.vue
 * @Description: file content
-->
<template>
  <div>
    <choose-date
      @startDateChange="startDateChange"
      @endDateChange="endDateChange"
    />
  </div>
</template>

<script lang='ts' setup>
import { DateRange } from '../../types'

const startDateChange = (val: Date) => {
  console.log('startDateChange: ', val)
}
const endDateChange = (val: DateRange) => {
  console.log('endDateChange: ', val.startDate, val.endDate)
}
</script>

<style lang='scss' scoped>
</style>