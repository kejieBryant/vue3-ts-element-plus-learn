<template>
  <el-progress :percentage="p" v-bind="$attrs"></el-progress>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  // 百分比
  percentage: {
    type: Number,
    default: 0
  },
  // 是否使用动画，动态进度条
  isAnimation: {
    type: Boolean,
    default: false
  },
  // 加载进度条的时间（毫秒）
  animationTime: {
    type: Number,
    default: 3000
  }
})
let p = ref(0)

onMounted(() => {
  if (props.isAnimation) {
    const t = Math.ceil(props.animationTime/props.percentage)
    let timer = setInterval(() => {
      if (p.value < props.percentage) {
        p.value += 1
      } else {
        clearInterval(timer)
      }
    }, t)
  } else {
    p.value = props.percentage
  }
})
</script>

<style lang="scss" scoped>

</style>