<!--
 * @Author: kejie
 * @Date: 2022-04-20 14:59:14
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-21 10:35:21
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
        :disabled-date="startDateDisableFunc"
        v-bind="$attrs.startOptions"
      />
    </section>
    <section class="end-date">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceHolder"
        :disabled="isEndDateDisabled"
        :disabled-date="endDateDisableFunc"
        v-bind="$attrs.endOptions"
      />
    </section>
  </section>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'

const emits = defineEmits(['startDateChange', 'endDateChange'])

const props = defineProps({
  startPlaceHolder: {
    type: String,
    default: '请选择开始日期'
  },
  endPlaceHolder: {
    type: String,
    default: '请选择结束日期'
  }
})

// 开始日期
const startDate = ref<Date|null>(null)

// 结束日期
const endDate = ref<Date|null>(null)

// 结束日期选择器是否禁用
const isEndDateDisabled = ref<Boolean>(true)

// 判断开始日期是否被禁用,今天之前的日期禁止选择
const startDateDisableFunc = (val: Date) => {
  return val.getTime() <  Date.now() - 1000 * 60 * 60 * 24
}

// 判断结束日期是否被禁用,结束日期大于开始日期，小于等于开始日期的日期禁用
const endDateDisableFunc = (val: Date) => {
  if (startDate.value) {
    return val.getTime() <= startDate.value.getTime();
  }
}

// 监听开始日期变化
watch(() => startDate.value, (val) => {
  if (val) {
    isEndDateDisabled.value = false;
    emits('startDateChange', val)
  } else {
    isEndDateDisabled.value = true
    endDate.value = null
  }
})

// 监听结束日期变化
watch(() => endDate.value, (val) => {
  if (val) {
    emits('endDateChange', {
      startDate: startDate.value,
      endDate: val
    })
  }
})

</script>

<style lang='scss' scoped>
.date-choose {
  display: flex;
}
.start-date {
  margin-right: 20px
}
</style>