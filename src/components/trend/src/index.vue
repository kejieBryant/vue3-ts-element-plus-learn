<!--
 * @Author: kejie
 * @Date: 2022-04-15 09:56:49
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-15 16:49:29
 * @FilePath: \vue3-ts-element-plus-learn\src\components\trend\src\index.vue
 * @Description: file content
-->
<template>
  <section class="content">
    <div class="text" :style="{color: trendType === 'up' ? upTextColor : downTextColor}">
      <!-- 使用了默认插槽则取插槽中传入的趋势文本 -->
      <slot v-if="slots.default"></slot>
      <span v-else>{{ text }}</span>
    </div>
    <div class="icon">
      <!-- 图标 -->
      <component
        :style="{color: iconColor}"
        :is="iconCompName"
      />
    </div>
  </section>
</template>

<script lang='ts' setup>
import { useSlots, computed } from 'vue'
import { toLine } from '../../../utils';

const slots = useSlots();

let props = defineProps({
  // 趋势类型  up => 上升  down => 下降  
  trendType: {
    type: String,
    default: 'up'
  },
  // 趋势文本内容
  text: {
    type: String,
    default: ''
  },
  // 上升图标颜色
  upIconColor: {
    type: String,
    default: 'red'
  },
  // 下降图标颜色
  downIconColor: {
    type: String,
    default: 'green'
  },
  // 上升文本颜色
  upTextColor: {
    type: String,
    default: '#000'
  },
  // 下降文本颜色
  downTextColor: {
    type: String,
    default: '#000'
  },
  // 是否反转图标颜色，只针对默认的图标颜色，反转后上升图标使用green，下降图标使用red，当反转图标颜色时，传入的自定义图标颜色不生效
  isReverseIconColor: {
    type: Boolean,
    default: false
  },
  // 自定义上升图标，只能使用element-plus提供的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  downIcon: {
    type: String,
    default: 'ArrowDown'
  }
})

const iconCompName = computed(() => {
  if (props.trendType === 'up') {
    return `el-icon${toLine(props.upIcon)}`
  }
  return `el-icon${toLine(props.downIcon)}`
})

const iconColor = computed(() => {
  if (props.isReverseIconColor) {
    return props.trendType === 'up' ? 'green' : 'red'
  }
  return props.trendType === 'up' ? props.upIconColor : props.downIconColor
})
</script>

<style lang='scss' scoped>
.content {
  margin-right: 15px;
  display: flex;
  align-items: center;
  .text {
    font-size: 0.8em;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
      margin-left: 8px;
    }
  }
}
</style>