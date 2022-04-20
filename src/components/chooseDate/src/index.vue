<!--
 * @Author: kejie
 * @Date: 2022-04-20 14:59:14
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-20 18:50:51
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseDate\src\index.vue
 * @Description: file content
-->
<template>
  <section class="date-choose">
    <section class="start-date">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceHolder" 
      />
    </section>
    <section class="end-date">

    </section>
  </section>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

// 开始日期
const startDate = ref<Date|null>(null)

// 结束日期
const endDate = ref<Date|null>(null)

</script>

<style lang='scss' scoped>
.date-choose {
  display: flex;
}
.start-date {
  margin-right: 20px
}
</style>