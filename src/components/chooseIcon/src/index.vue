<!--
 * @Author: kejie
 * @Date: 2022-04-13 14:39:20
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 18:11:59
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseIcon\src\index.vue
 * @Description: file content
-->
<template>
  <el-button @click="chooseIcon" :type="btnType">
    <slot>选择图标</slot>
  </el-button>
  <section class="icon-choose-comp-dialog-container">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="40%"
    >
      <!-- 使用element提供的滚动条替换浏览器默认的滚动条 -->
      <el-scrollbar>
        <section 
          class="icon-container"
          v-for="(item, index) in Object.keys(Icons)"
          @click="clickIcon(item)"
          :title="item"
        >
          <div class="icon-content">
            <component :is='`el-icon${toLine(item)}`' />
          </div>
          <div class="icon-title">
            {{ item }}
          </div>
        </section>
      </el-scrollbar>
    </el-dialog>
  </section>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import * as Icons from "@element-plus/icons-vue"
import { toLine } from '../../../utils/index'
// 自定义复制标签的hook
import { useCopy } from '../../../hooks/useCopy'

let props = defineProps({
  btnType: {
    type: String,
    default: 'primary'
  },
  title: {
    type: String,
    default: '选择图标'
  },
  visible: {
    type: Boolean,
    required: true
  }
})
let dialogVisible = ref<boolean>(props.visible)

// 点击选择图标按钮
let chooseIcon = () => {
  dialogVisible.value = true
}

// 选择图标，复制图标对应的标签以供粘贴
let clickIcon = (item: string) => {
  const tag = `<el-icon${toLine(item)} />`;
  useCopy(tag);
  dialogVisible.value = false;
}
</script>

<style lang='scss' scoped>
.dialog-content {
  height: 60vh;
  overflow: auto;
}
.icon-container {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
}
svg {
  height: 2em;
  width: 2em;
}
.icon-content {
  flex: 1;
}
.icon-title {
  flex: 1;
  text-align: center;
  // 超出长度已省略号显示
  // white-space: nowrap;
  // width: 100px;
  // text-overflow: ellipsis;
  // overflow: hidden;
}
</style>