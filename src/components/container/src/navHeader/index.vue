<!--
 * @Author: kejie
 * @Date: 2022-04-13 11:38:52
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 14:03:14
 * @FilePath: \m-comp\src\components\container\src\navHeader\index.vue
 * @Description: file content
-->
<template>
  <div class="header">
    <span @click="toggleCollapse" class="toggle-icon">
      <el-icon-expand v-if="collapse" />
      <el-icon-fold v-else />
    </span>
  </div>
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()
let emit = defineEmits(['update:collapse'])
let toggleCollapse = () => {
  emit('update:collapse', !props.collapse)
}
</script>

<style lang='scss' scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
}
.toggle-icon {
  cursor: pointer;
}
</style>