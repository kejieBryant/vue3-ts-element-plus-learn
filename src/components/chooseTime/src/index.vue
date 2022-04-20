<!--
 * @Author: kejie
 * @Date: 2022-04-20 14:56:38
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-20 16:46:48
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseTime\src\index.vue
 * @Description: file content
-->
<template>
  <section class="time-choose">
    <section class="start-time">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceHolder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </section>
    <section class="end-time">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceHolder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      />
    </section>
  </section>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'

// 向父组件发射的事件
const emits = defineEmits(['startTimeChange', 'endTimeChange'])

defineProps({
  // 开始时间选择器占位符
  startPlaceHolder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间选择器的开始时间限制
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间选择器的结束时间限制
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 开始时间选择器的步进
  startStep: {
    type: String,
    default: "00:30"
  },
  // 结束时间选择器占位符
  endPlaceHolder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间选择器的开始时间限制
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间选择器的结束时间限制
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间选择器的步进
  endStep: {
    type: String,
    default: "00:30"
  },
})

// 开始时间
const startTime = ref<string>('');
// 结束时间
const endTime = ref<string>('')
// 结束时间选择器是否禁用，当开始时间为空时禁用结束时间选择器
const endTimeDisabled = ref<boolean>(true);

// 监听开始时间的变化
watch(() => startTime.value, (val) => {
  if (!val) {
    // 开始时间为空，将结束时间选择器禁用且清空结束时间
    endTime.value = '';
    endTimeDisabled.value = true
  } else {
    // 开始时间有值，则将结束时间选择器禁用解除，并向父组件发射startTimeChange事件
    endTimeDisabled.value = false
    emits('startTimeChange', val)
  }
})

// 监听结束时间的变化
watch(() => endTime.value, (val) => {
  if (val) {
    // 结束时间有值则开始时间肯定也有值，向父组件发射endTimeChange事件
    emits('endTimeChange', {
      startTime: startTime.value,
      endTime: val
    })
  }
})

</script>

<style lang='scss' scoped>
.time-choose {
  display: flex;
}
.start-time {
  margin-right: 20px;
}
</style>